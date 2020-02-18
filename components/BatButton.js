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
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center'
    },
    button: {
        padding: 15,
        backgroundColor: '#ec7063',
        borderRadius: 10,
        height: 70
    }
});

export default BatButton;