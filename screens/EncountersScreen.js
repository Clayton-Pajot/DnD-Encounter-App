import { Alert, FlatList, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../Styles';
import * as FileSystem from 'expo-file-system';
import * as Notifications from 'expo-notifications';


const list = [];
//const EncounterList =[{id:1, name:'test encounter 1'},{id:2, name:'test encounter 2'}, {id:3, name:'test encounter 3'}]


const Encounter  = ({name})=>
(
    <TouchableOpacity>
        <Text style={styles.list}>{name}</Text>
    </TouchableOpacity>
);

const EncountersScreen = ({navigation}) => {
    const [messageFromFile, setMessageFromFile] = useState('-- FILE HAS NOT BEEN READ YET! --');

    readFromFile = () => {
        const filePath = FileSystem.documentDirectory + 'EncounterList.json';
        FileSystem.readAsStringAsync(filePath, {})
          .then((result) => {
            setMessageFromFile(result);
          })
          .catch((error) => {
            console.log('An error occurred: ');
            console.log(error);
          }); 
      };

  return (
    <View style={styles.container}>
        <Text style={styles.header}>
            Encounters
        </Text>
        <LinearGradient
        // Background Linear Gradient
        colors={['black', 'transparent']}
        start={{ x: 0, y: 1}}
        end={{x: 0, y: 0.5}}
        style={styles.gradient}>
            <Text>
                {messageFromFile}
            </Text>

        <FlatList
            data={list}
            renderItem={({item}) => <Encounter name={item.name}/>}
        >

        </FlatList>
        <View style={styles.buttonContainer}>

            <TouchableOpacity 
                onPress={() => navigation.navigate('Encounter')}
                style={styles.button}
            >
                <Text
                style={styles.buttonText}>
                    Add Encounter
                </Text>
            </TouchableOpacity>

            

        </View>

        </LinearGradient>
      

    </View>
    
  )
}

export default EncountersScreen
