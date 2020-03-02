import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';

const speak = () => {
    var thingToSay = 'Excuse me for my voice. I got a cold! Thank you for your attention. Special for SoftServe and A3-B2 unit! This app is sponsored by Chuck Norris! I hope you liked this app. Bye!';
    Speech.speak(thingToSay);
}

const SpeechButton = () => {
    return (
        <View style={styles.container}>
            <Button title="Press to hear words of gratitude" onPress={speak} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default SpeechButton;