import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import {StyleSheet, Text, View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Routine(){

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    
    const onChange = (event, selectedDate) =>{
        const currentDate = selectedDate || date;
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate  = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Hours: ' + tempDate.getHours() + '|Minutes: ' + tempDate.getMinutes();
        setText(fDate + '\n' + fTime)

        console.log(fDate + '(' + fTime + ')')
    }
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return (
        <View style={styles.container}>
            <Text style = {{fontWeight:'bold',fontSize:14}}>{text}
                
            </Text>
            <View row style={{ margin:10 }}>
                <Button title ='DatePicker' onPress={()=> showMode('date')}/>
                
            </View>
            <View row style={{ margin:10 }}>
                
                <Button title ='TimePicker' onPress={()=> showMode('time')}/>
            </View>
            

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

            <StatusBar style="auto"/>

        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        // backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})