import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text}>Home Screen</Text>
            <Button
                onPress={() => navigation.navigate('Intro')}
                title="Гра"
                style={styles.buttonView}
            />
            <Button
                onPress={() => navigation.navigate('StartGame')}
                title="Рекорди"
                style={styles.buttonView}
            />
            <Button
                onPress={() => navigation.navigate('StartGame')}
                title="Про додаток"
                style={styles.buttonView}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
    viewStyle: {
        backgroundColor: '#fff',
    },
    buttonView: {
        color: 'red'
    }
});

export default WelcomeScreen;