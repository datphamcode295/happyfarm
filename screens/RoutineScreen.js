import React from 'react';
import { StyleSheet, Text, View, ScrollView,SafeAreaView, TextInput } from 'react-native';

 


export default function RoutineScreen() {
    const [title, onChangeTitle] = React.useState("");
    const [start, onChangeStart] = React.useState("");
    const [end, onChangeEnd] = React.useState("");
  return (
<SafeAreaView style={styles.container}> 
        <View style={styles.schedule}>
            <Text>Schedule</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeTitle}
                value={title}
                placeholder="Title"
            />
        
        </View>
        <View style={styles.time}>
        <View>
          <Text>Start Time</Text>
          <TextInput
                style={styles.input}
                onChangeText={onChangeStart}
                value={start}
                placeholder="Start"
            />
        </View>
        <Text>Start Time</Text>
        </View>
        <View style={styles.date}><Text>Date</Text></View>
        <View style={styles.devices}><Text>Devices</Text></View>
</SafeAreaView>
      
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:5,
    margin:10,
    marginTop:20,

  },
  schedule:{
    flex:1,
    backgroundColor:'red',
    width:"100%"
  },
  time:{
    flex:1,
    backgroundColor:'yellow',

  },
  date:{
    flex:1,
    backgroundColor:'pink',
  },
  devices:{
    flex:3,
    backgroundColor:'green',

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginHorizontal:35,
  },

});
