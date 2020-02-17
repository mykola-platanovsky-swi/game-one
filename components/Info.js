import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Timer from './Timer';

const Info = props => {
    return (
        <View style={styles.info}>
            <View style={styles.advice}>
                <Text>Шукай: {props.next}</Text>
                <Text>Спроб: {props.try}</Text>
            </View>
            <View style={styles.timer}>
                <Text>Витрачено часу:</Text>
                <Timer active={props.active}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    info: {
        paddingTop: 10,
        flexDirection: 'row',
        width: '90%'
    },
    advice: {
        width: '50%',
        height: 40,
        //backgroundColor: 'green',
    },
    timer: {
        height: 40,
        //backgroundColor: 'red',
        width: '50%',
        alignItems: 'center',        
    }
});

export default Info;