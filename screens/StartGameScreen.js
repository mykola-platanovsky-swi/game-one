import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Grid from '../components/Grid';

generateNumbers = () => {
    let numbers = [];

    for (var i = 1; i <= 36; i++)
        numbers.push(i);
    
    numbers = numbers.sort(() => Math.random() - 0.5);
    return numbers;
}

const StartGameScreent = props => {
    return(
        <View>
            <Grid numbers={generateNumbers()} active={props.active}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default StartGameScreent;