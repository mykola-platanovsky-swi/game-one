import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

class BatButton extends React.Component {
    constructor(props) {
        super(props);
    };

    async asyncPlaySound() {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/buttonBeep.wav'),
            {
                shouldPlay: true,
            },
        );
        this.sound = sound;
    }

    playSound = () => {
        this.asyncPlaySound();
    }

    render() {
        return (
            <TouchableOpacity style={[styles.button, this.props.customStyle]} onPress={() => { this.playSound(), this.props.onPress() }}>
                <Text style={styles.text}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
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