import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const IntroScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Intro</Text>
            <Button
                onPress={() => navigation.navigate('StartGame')}
                title="Гра"
                style={styles.buttonView}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IntroScreen;