import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
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
                <Text style={styles.title}>UnisWApp</Text>
                <Text style={styles.title}>Cotação</Text>
                <Text style={styles.title}>{brl}</Text>
                <Text style={styles.description}>Aplicativo do trabalho de Dev Mobile</Text>
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
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },

    description: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold'
    }
})