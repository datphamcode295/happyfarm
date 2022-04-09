import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button,TouchableOpacity, Text } from "react-native";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "../firebase-config";

//https://www.youtube.com/watch?v=9pq9yR9nEqo

export default function LoginScreen({navigation})  {
  const [email, onChangeEmail] = React.useState("");
  const [pass, onChangePass] = React.useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);



  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      console.log('Signed in!')
      const user = userCredential.user;
      navigation.navigate('Home')

    //   console.log(user)
    
    })
    .catch(error => {
      console.log(error)
    })
  }
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      console.log('Account created!')
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }

  const func = () => {
    console.log(email + ' ' + pass)
    onChangeEmail("")
    onChangePass("")
    handleSignIn()
  }

  return (
    <SafeAreaView style={styles.container}>
    
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePass}
        value={pass}
        placeholder="Password"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={func}
      >
          <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleCreateAccount}
        style={styles.button}
      >
          <Text>Create Account</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding:5,
      },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: 250,
        padding: 10,
    },
    button:{
        alignItems: "center",
        backgroundColor: "#76b5c5",
        padding: 10,
        width: 150,
        marginTop:5
    }
});

