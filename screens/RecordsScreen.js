import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import BatButton from '../components/BatButton';
import { FlatList } from 'react-native-gesture-handler';

const DATA = [
    {id: "1", name: "Чак Норіс", score: "0:00"},
    {id: "2", name: "Кіт Чака", score: "0:01"},
    {id: "3", name: "Сусід Чака", score: "0:02"},
    {id: "4", name: "Гравець №1", score: "1:20"},
    {id: "5", name: "Гравець №2", score: "1:25"},
    {id: "6", name: "Гравець №3", score: "2:00"},
    {id: "7", name: "Твій результат", score: "2:20"}
];

function Item({ title, score }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title} - {score}</Text> 
      </View>
    );
  }

const RecordsScreen = ({ navigation }) => {
        return (
            <ImageBackground source={require('../assets/bckgnd1.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <View><Text style={styles.header}>Зала слави ім. Чака</Text></View>
                <FlatList
                        data={DATA}
                        renderItem={({ item }) => <Item title={item.name} score={item.score}/>}
                        keyExtractor={item => item.id}
                />
                <View style={styles.viewButton}>
                    <BatButton
                        onPress={() => navigation.navigate('Welcome')}
                        title="Додому"
                        customStyle={{backgroundColor: '#0a4ecc'}}
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#c9e0ff',
        alignItems: 'center',
    },
    viewButton: {
        width: '90%',
        paddingVertical: 50,
    },
    title: {        
        fontSize: 18,
        color: '#fff'
    },
    header: {
        fontSize: 23,
        color: '#fff',
        padding: 20
    },
    item: {
        backgroundColor: '#408ef7',
        padding: 10,
        marginVertical: 5,
        width: '100%',
    }
});

export default RecordsScreen;