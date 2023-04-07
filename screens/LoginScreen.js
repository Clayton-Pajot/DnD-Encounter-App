import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import HomeScreen from './HomeScreen';
import styles from '../Styles';

//import {auth} from '../firebase'
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const LoginScreen = ({ navigation }) => 
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const auth = getAuth();
    
  //  createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in 
  //       console.log('starting create user')
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });

  //   const handleSignup = () =>{
  //     console.log('starting auth with ' + email + ' and ' + password);
  //     auth
  //     .createUserWithEmailAndPassword(email,password)
  //     .then(userCredentials => {
  //       const user = userCredentials.user;
  //       console.log(user.email);
  //     })
  //     .catch(error=> alert(error.message))
  //   }

  //   const handleRegister = async () => {
  //     console.log('Registration started');
  //     try {
  //       await firebase.auth().createUserWithEmailAndPassword(email, password);
  //       console.log('User registered');
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  
  return (
      <KeyboardAvoidingView
        style={styles.container}
        behaviour="padding">
        
        
    <LinearGradient
      // Background Linear Gradient
      colors={['black', 'transparent']}
      start={{ x: 0, y: 1}}
      end={{x: 0, y: 0.5}}
      style={styles.gradient}>
        

        <Text style={styles.title}>
          Clayton's D&D App
        </Text>
        <View style={styles.inputContainer}>

          <TextInput
            placeholder="E-mail"
            value={email }
            onChangeText={text => setEmail(text)}
            style={styles.input}
            />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
            />
        </View>

        <View style={styles.buttonContainer}>

          <TouchableOpacity 
            onPress={() => {}}
            style={styles.button}
          >
            <Text
              style={styles.buttonText}>
                Login
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            //onPress={handleSignup}
            onPress={() => navigation.navigate('Encounter Screen')}
            
            style={[styles.button, styles.buttonOutline]}
          >
            <Text
              style={styles.buttonOutlineText}>
                Register
            </Text>
          </TouchableOpacity>

        </View>
    </LinearGradient>
      </KeyboardAvoidingView>
  )
}

export default LoginScreen
