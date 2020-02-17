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
        <React.Fragment>
            <View style={styles.container}>
                <Grid numbers={generateNumbers()} active={active} />
                <View style={styles.viewButton}>
                    <Button
                        onPress={() => navigation.navigate('Welcome')}
                        title="Додому"
                    />
                </View>
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9e79f',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-around',
    },
    viewButton: {
        width: '90%',
        paddingVertical: 50,
        color: '#fff'
    }
});

export default StartGameScreen;