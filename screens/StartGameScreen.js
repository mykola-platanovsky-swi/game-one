import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Grid from '../components/Grid';

const generateNumbers = () => {
    let numbers = [];

    for (var i = 1; i <= 36; i++)
        numbers.push(i);

    numbers = numbers.sort(() => Math.random() - 0.5);
    return numbers;
}

const StartGameScreen = ({ navigation, active }) => {
    return (
        <View style={styles.container}>
            <Grid numbers={generateNumbers()} active={active} />
            <Button
                onPress={() => navigation.navigate('Welcome')}
                title="Додому"
                style={styles.button}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ca6f1e',
        alignContent: 'center',
        //justifyContent: 'center',
    },
    button: {
        paddingTop: 10,
        width: '90%',
    }
});

export default StartGameScreen;