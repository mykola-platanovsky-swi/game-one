import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

class BatButton extends React.Component {
    constructor(props) {
        super(props);
    };

    press = () => {
        this.buttonBeep.replayAsync();
    }

    async UNSAFE_componentWillMount() {
        this.buttonBeep = new Audio.Sound();
        try {
            await this.buttonBeep.loadAsync(require('../assets/buttonBeep.wav'));
            //await this.buttonBeep.playAsync();
        } catch (error) {
            alert('Audio load. An error occurred!')
        }
    }

    render() {
        return (
            <TouchableOpacity style={[styles.button, this.props.customStyle]} onPress={() => { this.press(); this.props.onPress() }}>
                <Text style={styles.text}>{this.props.title}</Text>
            </TouchableOpacity>
        )
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
        //backgroundColor: '#ec7063',
        borderRadius: 10,
        height: 60
    }
});

export default BatButton;