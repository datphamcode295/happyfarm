import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button,TouchableOpacity, Text, Dimensions, Alert, Modal, Pressable, View } from "react-native";
import { getAuth, sendPasswordResetEmail} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "../firebase-config";
import {StatusBar} from 'expo-status-bar';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const {width, height} =Dimensions.get('window')



//https://www.youtube.com/watch?v=9pq9yR9nEqo

export default function ResetScreen({navigation})  {
  const [email, onChangeEmail] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);




  const func = () => {
    sendPasswordResetEmail(auth,email)
    .then((respone) => {

      console.log(respone);
      setModalVisible(true);
      

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }

  function SvgTop() {
    return (
      <Svg
      width={500}
      height={324}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M297.871 315.826c73.405 13.896 165.338-13.964 202.129-29.63V230H1.326v63.5c69.15-42.913 204.789 4.957 296.545 22.326z"
        fill="url(#prefix__paint0_linear_103:6)"
        fillOpacity={0.5}
      />
      <Path
        d="M237.716 308.627C110.226 338.066 30.987 318.618 0 304.77V0h500v304.77c-43.161-12.266-134.794-25.581-262.284 3.857z"
        fill="url(#prefix__paint1_linear_103:6)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_103:6"
          x1={492.715}
          y1={231.205}
          x2={480.057}
          y2={364.215}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#2EB62C" />
          <Stop offset={1} stopColor="#83D475" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_103:6"
          x1={15.304}
          y1={4.155}
          x2={144.016}
          y2={422.041}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#2EB62C" />
          <Stop offset={1} stopColor="#83D475" />
        </LinearGradient>
      </Defs>
    </Svg>
    )
  }

  return (
    
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgTop/>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>B???n vui l??ng ki???m tra email v?? nh???p m???t kh???u m???i !!!</Text>
            <Pressable
              style={[styles.modalbutton, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible)
                navigation.navigate('Login');
              }}
            >
              <Text style={styles.textStyle}>Quay l???i login</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <Text style={styles.titulo}>Reset Password</Text>
        <TextInput 
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
          style={styles.textInput}
        />

        
      
      <TouchableOpacity
    style={styles.button}
       onPress={func}
      >
         <Text fontWeight='bold'>Send Email</Text>
      </TouchableOpacity>
        
        
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
    padding:5,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:'20%'

  },
  containerSVG: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    flex:0.8,
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
      backgroundColor: "#83D475",
      padding: 10,
      width: 150,
      marginTop:20,
  },
  titulo:{
    fontSize: 40,
    color: '#34434D',
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth:1,
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20
  },centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 45,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalbutton: {
    marginTop:5,
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#83D475",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    lineHeight:35,
    marginBottom: 15,
    textAlign: "center",
    fontSize:30
  },
});