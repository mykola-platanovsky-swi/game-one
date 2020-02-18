import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
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
            <React.Fragment>
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
                    />
                </View>
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7dcea0',
        alignItems: 'center',
        //justifyContent: 'center',
        //justifyContent: 'space-around',
    },
    viewButton: {
        width: '90%',
        paddingVertical: 50,
    },
    title: {        
        fontSize: 20,
        color: '#fff'
    },
    header: {
        fontSize: 25,
        color: '#000',
        padding: 10
    },
    item: {
        backgroundColor: '#138d75',
        padding: 10,
        marginVertical: 5,
        width: '100%'
    }
});

export default RecordsScreen;