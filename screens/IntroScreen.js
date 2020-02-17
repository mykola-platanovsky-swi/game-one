import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Spacer from '../components/Spacer';
import BatButton from '../components/BatButton';

const IntroScreen = ({ navigation }) => {
    const text1 = "Високоповажний гравцю! (читати голосом Бетмена).";
    const text2 = "Через затори на дорозі я не встигаю на наш стендап, допоможи мені прибрати всі перешкоди за найкоротший проміжок часу. Швидше натискай 'Почати'... команда сама себе не 'відстендапить'.";
    return (
        <View style={styles.container}>
            <Image source={require('../assets/batman.jpg')} />
            <View style={styles.textView}>
                <Text style={styles.text}>{text1}</Text>
                <Spacer size={20}/>
                <Text style={styles.text}>{text2}</Text>
            </View>
            <View style={styles.buttonView}>
            <BatButton
                onPress={() => navigation.navigate('StartGame')}
                title="Почати"                
            />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textView: {
        padding: 20,
        alignContent: 'center',
        backgroundColor: '#f9e79f',
        borderRadius: 10,
        width: '90%'
    },
    text: {
        fontSize: 20
    },
    buttonView: {
        width: '90%',
    }
});

export default IntroScreen;