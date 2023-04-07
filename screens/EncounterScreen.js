import { FlatList, StyleSheet, Text, View, TouchableOpacity, Alert, TextInput} from 'react-native'
import React, {useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../Styles';
import * as MailComposer from 'expo-mail-composer';
import * as FileSystem from 'expo-file-system';

const deleteEncounter = {
  text: 'Delete',
  onPress: () => console.log('Encounter Deleted'),
}

const promptForDelete = () =>{
  Alert.alert(
      'Confirm selection','Do you want to delete this encounter?',[deleteEncounter],
      {cancelable: false}
  )
}




sendMessageWithEmail = async () => {
  const isAvailable = await MailComposer.isAvailableAsync();

  if(isAvailable) {
    var options = {
      recipients: ['me@gmail.com'],
      subject: 'My Encounter',
      body: "This is an encounter for D&D"
      // isHtml (boolean) -- Whether the body contains HTML tags so it could be formatted properly. Not working perfectly on Android.
      // attachments (array) -- An array of app's internal file uris to attach.
    };

    MailComposer.composeAsync(options).then((result) => { console.log("Email " + result.status); });
  } else {
    console.log("Email is not available on this device");
  }
}



const EncounterScreen = ({navigation}) => 
{

  const [creatureName, setCreatureName] = useState('');
  const [creatureHP, setCreatureHP] = useState('');
  [messageForFile, setMessageForFile] = useState('');

  saveToFile = () => {
    console.log("Saving encounter to file...");
    const filePath = FileSystem.documentDirectory + 'EncounterList.json';
    FileSystem.writeAsStringAsync(filePath, messageForFile, {})
      .then(() => {
        console.log('File was written!');
        console.log(filePath);
      })
      .catch((error) => {
        console.log('An error occurred: ');
        console.log(error);
      }); 
  };

  

  return (
    <View style={styles.container}>
        <Text style={styles.header}>
            Encounter
        </Text>

        <LinearGradient
        // Background Linear Gradient
        colors={['black', 'transparent']}
        start={{ x: 0, y: 1}}
        end={{x: 0, y: 0.5}}
        style={styles.gradient}>
          <View style={styles.inputContainerEncounter}>

          <TextInput
            placeholder="Creature Name"
            value={creatureName}
            onChangeText={text => setCreatureName(text)}
            style={styles.inputEncounter}
            secureTextEntry
            />
            <TextInput
            placeholder="Creature HP"
            value={creatureHP}
            onChangeText={text => setCreatureHP(text)}
            style={styles.inputEncounter}
            secureTextEntry
            />

          </View>
          <View style={styles.buttonContainerEncounter}>

            <TouchableOpacity 
                onPress={() =>{}}
                style={styles.buttonEncounter}
            >
                <Text
                style={styles.buttonTextEncounter}>
                    Add Creature
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={saveToFile}
                style={styles.buttonEncounter}
            >
                <Text
                style={styles.buttonTextEncounter}>
                    Save
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={sendMessageWithEmail}
                style={styles.buttonEncounter}
            >
                <Text
                style={styles.buttonTextEncounter}>
                    Send Encounter (Email)
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => promptForDelete()}
                style={styles.buttonEncounter}
            >
                <Text
                style={styles.buttonTextEncounter}>
                    DELETE
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('Encounter Screen')}
                style={styles.buttonEncounter}
            >
                <Text
                style={styles.buttonTextEncounter}>
                    Done
                </Text>
            </TouchableOpacity>

        </View>

        </LinearGradient>

    </View>
    
  )
}

export default EncounterScreen
