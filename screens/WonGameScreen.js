import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import BatButton from '../components/BatButton';

const greet = "Візьми цю нагороду та носи її з гордістю. Я завжди можу на тебе покластися! Від сьогодні ти один із нас!";
const WonGameScreen = ({ navigation }) => {
    return (
        <React.Fragment>
            <View style={styles.container}>
                <View><Text style={styles.text}>Вітаю! Місію виконано!</Text></View>
                <Image source={require('../assets/cap.jpg')} style={styles.image} />
                <View style={styles.view}><Text style={styles.small}>{greet}</Text></View>
                <View style={styles.view}>
                    <BatButton
                        onPress={() => navigation.navigate('Records')}
                        title="До Зали Слави!"
                    />
                </View>
                
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d7bde2',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-around',
    },
    view: {
        width: '90%',
    },
    image: {
        width: 300,
        height: 200
    },
    text: {
        fontSize: 25
    },
    small: {
        fontSize: 18
    }
});

export default WonGameScreen;