import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BatButton = props => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center'
    },
    button: {
        padding: 10,
        backgroundColor: '#ec7063',
        borderRadius: 10,
        height: 60
    }
});

export default BatButton;