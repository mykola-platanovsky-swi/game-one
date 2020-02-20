import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import BatButton from '../components/BatButton';

const LostGameScreen = ({ navigation }) => {
    return (
        <React.Fragment>
            <View style={styles.container}>
                <View><Text style={styles.text}>Зберися! Я знаю ти зможеш!</Text></View>
                <Image source={require('../assets/slap.jpg')} style={styles.image}/>
                <View style={styles.viewButton}>
                    <BatButton
                        onPress={() => navigation.navigate('Welcome')}
                        title="Ні, я не зможу!"
                        customStyle={{backgroundColor: '#7704bf'}}
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
    viewButton: {
        width: '90%',
        paddingVertical: 50,
        color: '#fff'
    },
    image: {
        width: '90%'
    },
    text:{
        fontSize: 25
    }
});

export default LostGameScreen;