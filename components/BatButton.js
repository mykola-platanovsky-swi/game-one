import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BatButton = (props) => {
    return (
        <TouchableOpacity style={[styles.button, props.customStyle]} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center'
    },
    button: {
        padding: 15,
        borderRadius: 10,
        height: 60,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
    }
});

export default BatButton;