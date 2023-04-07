import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    
    buttonContainerEncounter:{
      width: '90%',
      flexWrap: "wrap",
      flexDirection: "row",
      marginTop: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
    button:{
      backgroundColor: 'white',
      width: '100%',
      margin: 10,
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonEncounter:{
      backgroundColor: 'white',
      width: '40%',
      margin: 5,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      fontSize: 14
    },
    buttonOutline:{
      marginTop: 5,
      backgroundColor: '#aa5555',
      borderColor: 'white',
      borderWidth: 2,
    },
    buttonText:{
      color: 'darkred',
      fontWeight: 700,
      fontSize: 20,
    },
    buttonTextEncounter:{
      color: 'darkred',
      fontWeight: 700,
      fontSize: 12,
      alignContent: 'center'
    },
    buttonOutlineText:{
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    },
    container:{
      flex: 1,
      backgroundColor: 'darkred',
      justifyContent: 'center',
      alignItems: 'center'
    },
    gradient:{
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    header:{
        marginTop: 10,
        fontSize: 40
    },
    inputContainer:{
      width: '80%'
    },
    inputContainerEncounter:{
      width: '80%',
      flexWrap: "wrap",
      flexDirection: "row",
      marginTop: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input:{
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    inputEncounter:{
      backgroundColor: 'white',
      width: '40%',
      padding: 5,
      borderRadius: 10,
      margin: 5,
    },
    list:{
        fontSize: 18,
    },
    title:{
      fontSize: 40,
      color: 'white',
      marginBottom: 50
    }
  })

  export default styles;