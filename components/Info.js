import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Timer from './Timer';

const Info = props => {
    return (
        <View style={styles.container}>
            <View style={styles.advice}>
                <Text style={styles.text}>Знайди: {props.next}</Text>
                <Text style={styles.text}>Спроб: {props.try}</Text>
            </View>
            <View style={styles.timer}>
                <Text style={styles.text}>Витрачено часу</Text>
                <Timer active={props.active} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        flexDirection: 'row',
        width: 330,
        height: 60,
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 10
        
    },
    advice: {
        flex: 1,
    },
    timer: {
        flex: 1,
    },
    text: {
        fontSize: 18
    }
});

export default Info;