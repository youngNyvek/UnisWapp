import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import UniCurrency from './services/api';

export default function App() {
    const [brl, setBrl] = useState(Number);

    useEffect( ()=>{
        UniCurrency().then( response => {
            setBrl(response.data.uniswap.brl);
        });
    },[])
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
            <View style={styles.container}> 
                <View  style={{flex: 1, justifyContent:'center'}}>
                    <Text style={[styles.title, {color:'#fff'}]}>
                        Simulação
                    </Text>
                </View>
                <View style={{flex:5, alignItems:'center', width: '100%'}}>
                    <View style={{alignItems: 'center', backgroundColor:'#322854', width:'80%', padding: 10, borderRadius: 10}}>
                        <Text style={[styles.description,{color:'#fff'}]}>UniswApp</Text>
                        <View>
                            <Text style={styles.title}>{brl}</Text>
                        </View>
                        <Text style={[styles.description,{color:'#fff'}]}>Cotação Atual</Text>
                    </View>
                    <TouchableOpacity style={{
                        backgroundColor: '#d1b92e', 
                        padding: 20, 
                        borderRadius: 10, 
                        marginTop: 50
                    }}>
                        <Text style={styles.description}>
                            Executar nova ordem
                        </Text>
                    </TouchableOpacity>
                    <View style={{flex: 1, backgroundColor: '#322854', width: '100%', marginTop: 30}}>
                        <Text style={{color:'#fff', padding: 10, fontSize: 16}}>
                            Ultimas ordens
                        </Text>
                        <View style={{width: '100%', backgroundColor:'#201936', height: 60, marginBottom: 10}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 5}}>
                                <Text style={{color: '#d1b92e', textAlign:'center'}}>
                                    Cotação 
                                    {'\n'}
                                    {'\n'}
                                    233.82
                                </Text >
                                <Text style={{color: '#d1b92e', textAlign:'center'}}>
                                    qtd.
                                    {'\n'}
                                    {'\n'}
                                    1
                                </Text>
                                <Text style={{color: '#d1b92e', textAlign:'center'}}>
                                    Valor
                                    {'\n'}
                                    {'\n'}
                                    233.82
                                </Text>
                                <Text style={{color: '#d1b92e', textAlign:'center'}}>
                                    Data
                                    {'\n'}
                                    {'\n'}
                                    02/05/2021
                                </Text>
                            </View>
                        
                        </View>
                    
                    </View>
                </View>
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
    }
})