import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Timer from './Timer';

const Info = props => {
    return (
        <View style={styles.container}>
            <View style={styles.advice}>
                <Text>Знайди: {props.next}</Text>
                <Text>Спроб: {props.try}</Text>
            </View>
            <View style={styles.timer}>
                <Text>Витрачено часу:</Text>
                <Timer active={props.active} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flexDirection: 'row',
        width: 350,
        height: 100,
        backgroundColor: 'white',
        padding: 5

    },
    advice: {
        flex: 1,
    },
    timer: {
        flex: 1,
    }
});

export default Info;