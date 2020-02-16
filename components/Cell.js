import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Cell = props => {
    const pressCellHandler = () =>{
    };

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.cell}>
            <Text>{props.value}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cell: {
        width: "16%",
        height: "16%",
        borderWidth: 1,
        color: '#fff',
        borderColor: '#aeb6bf',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1
    },
});

export default Cell;