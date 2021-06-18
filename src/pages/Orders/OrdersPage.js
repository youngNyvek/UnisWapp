import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar, TextInput, TouchableOpacity, Modal, FlatList } from 'react-native';
import UniCurrency from '../../services/api';
import CurrencyInput from 'react-native-currency-input';
import 'intl';
import 'intl/locale-data/jsonp/en';
import NumericInput from 'react-native-numeric-input';
import {Orders} from '../../database/vasernIndex';
import OrderCard from './OrderCard';
export default function App() {
    const [brl, setBrl] = useState(0);
    const [orders, setOrders] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        UniCurrency().then(response => {
            setBrl(response.data.uniswap.brl);
        });
    }, []);

    const ModalOverlay = () => {
        const [qtd, setQtd] = useState(0);
        
        return (
            <Modal
                animationType="slide"
                transparent={true}
                
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}
            >
                <View style={modalStyles.centeredView}>
                    <View style={modalStyles.modalView}>
                        <Text style={modalStyles.modalText}>Quantidade</Text>
                        <NumericInput rounded onChange={setQtd}
                            minValue={0}
                            rightButtonBackgroundColor='#7159c1'
                            leftButtonBackgroundColor='#7159c1'
                        />
                        <Text style={[modalStyles.modalText, { marginTop: 60 }]}>{new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(qtd * brl)}</Text>

                        <TouchableOpacity
                            style={[styles.execButton, modalStyles.buttonClose]}
                            onPress={() => {
                                setModalVisible(!modalVisible); 
                                insertIntoDb(qtd)
                            }}
                        >
                            <Text style={modalStyles.textStyle}>Executar ordem</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        )
    };
    function insertIntoDb(qtd){
        Orders.insert({cotation: brl, qtd,value:(qtd * brl).toFixed(2), date: (new Date()).toLocaleDateString('pt-BR') })
    }

    function getItens() {
        let getting = Orders.data();
        let itens = [];
        getting.map((item) => {
          itens.push({cotation: item.cotation, qtd: item.qtd,value:item.value, date: item.date})
        });
    
        console.log('getItens itens', itens);
        setOrders(itens);
      }
    useEffect(() => {
        Orders.onLoaded(() => { getItens() });
        Orders.onChange(() => { getItens() });
      }, []);
    
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={[styles.title, { color: '#fff' }]}>
                        Simulação
                    </Text>
                </View>
                <View style={{ flex: 5, alignItems: 'center', width: '100%' }}>
                    <View style={{ alignItems: 'center', backgroundColor: '#322854', width: '80%', padding: 10, borderRadius: 10 }}>
                        <Text style={[styles.description, { color: '#fff' }]}>UniswApp</Text>
                        <View>
                            <Text style={styles.title}>{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(brl)}</Text>
                        </View>
                        <Text style={[styles.description, { color: '#fff' }]}>Cotação Atual</Text>
                    </View>
                    <TouchableOpacity style={styles.execButton}
                        onPress={() => setModalVisible(true)}>
                        <Text style={styles.description} >
                            Executar nova ordem
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flex: 1, width: '100%', marginTop: 30 }}>
                        <Text style={{ color: '#fff', padding: 10, fontSize: 16 }}>
                            Ultimas ordens
                        </Text>
                        <View style={{ width: '100%',  height: 60, marginBottom: 10, flex: 1 }}>

                            <FlatList
                                data={orders.reverse()}
                                contentContainerStyle={{ padding: 20, paddingBottom: 10}}
                                renderItem={(render) => (
                                    <OrderCard render={render}/>
                                )}

                                keyExtractor={(item, index) => `item${index}`}

                            />


                        </View>

                    </View>
                </View>
                <ModalOverlay />

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        color: '#7159c1',
        fontSize: 35,
        fontWeight: 'bold'
    },

    description: {
        color: '#322854',
        fontSize: 20,
    },
    execButton: {
        backgroundColor: '#d1b92e',
        padding: 20,
        borderRadius: 10,
        marginTop: 50
    }
});


const modalStyles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#7159c1",
    },
    textStyle: {
        color: "white",

        textAlign: "center"
    },
    modalText: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold"
    }
});