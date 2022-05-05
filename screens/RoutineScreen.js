import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput,Button, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from '../components/Task';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function RoutineScreen() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  const onChange = (event, selectedDate) =>{
    const currentDate = selectedDate || date;
    setShow(Platform.OS ==='ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate  = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = tempDate.getHours() + ': ' + tempDate.getMinutes();
    // setText(fDate + '\n' + fTime)
    setText(fDate + '\n' + fTime)
    setText(tempDate.getTime())
    console.log(fDate + '(' + fTime + ')')
    setTask(fDate+ ' _ ' + fTime)
    
}

  const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        {/* <Text style={styles.sectionTitle}>Today's tasks</Text> */}
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <Button title ='DatePicker' onPress={()=> showMode('date')}/>
        <Button title ='TimePicker' onPress={()=> showMode('time')}/>
        {/* <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} /> */}
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
      {show &&(
            <DateTimePicker
                    testID='dateTimePicker'
                    value = {date}
                    mode = {mode} 
                    is24Hour ={true}
                    display='default'
                    onChange={onChange}
                
                />
            )}

    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: -30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
