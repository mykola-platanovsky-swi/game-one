import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import BatButton from '../components/BatButton';
import SpeechButton from '../components/SpeechButton';

const AboutScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/bckgnd1.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
            <SpeechButton/>
            <View><Text style={styles.text}>Презентація React Native 02.03.2020</Text></View>
                <View><Text style={styles.text}>@mplata</Text></View>
                <View style={styles.viewButton}>
                    <BatButton
                        onPress={() => navigation.navigate('Welcome')}
                        title="Додому"
                        customStyle={{ backgroundColor: '#18435A' }}
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#d7bde2',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'flex-end'
    },
    viewButton: {
        width: '90%',
        paddingVertical: 50,
        color: '#fff',
    },
    text: {
        fontSize: 18,
        color: '#fff'
    }
});

export default AboutScreen;