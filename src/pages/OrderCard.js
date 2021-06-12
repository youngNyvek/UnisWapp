import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const Card = ( {render}) => {
    return (
        <View style={{ flexDirection: 'row', borderRadius: 4, backgroundColor: '#201936', justifyContent: 'space-around', padding: 5, marginBottom: 10 }}>
            <   Text style={{ color: '#d1b92e', textAlign: 'center' }}>
                Cotação
{'\n'}
                {'\n'}
                {render.item.cotation}
            </Text >
            <Text style={{ color: '#d1b92e', textAlign: 'center' }}>
                qtd.
{'\n'}
                {'\n'}
                {render.item.qtd}
            </Text>
            <Text style={{ color: '#d1b92e', textAlign: 'center' }}>
                Valor
{'\n'}
                {'\n'}
                {render.item.value}
            </Text>
            <Text style={{ color: '#d1b92e', textAlign: 'center' }}>
                Data
{'\n'}
                {'\n'}
                {render.item.date}
            </Text>
        </View>
    )
}

export default Card;