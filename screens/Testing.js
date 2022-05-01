import React, { Component,useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, Slider,View, Button, Platform } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from 'toggle-switch-react-native';

import { StatusBar } from "expo-status-bar";

import DateTimePicker from '@react-native-community/datetimepicker';


import * as theme from '../theme';
import { Block, Text, PanSlider } from '../components';
import mocks from '../settings';
import Routine from './Routine';



class Testing extends Component{

    state = {
        // direction: 45,
        // speed: 12,
        toggleButton:false,
      
      }
    
    // const { settings } = this.props;
    // const LightOnIcon = settings['lighton'].icon;    
    render() {
        const { route,navigation, settings } = this.props;
        
        const name = 'Light';
        const Icon = settings['light'].icon;
        const LightOnIcon = settings['lighton'].icon;

    
    return (
        // <View style={styles.container}>
        //     <Text style = {{fontWeight:'bold',fontSize:20}}>{text}
                
        //     </Text>
        //     <View style={{margin:20}}>
        //         <Button title ='DatePicker' onPress={()=> showMode('date')}/>
        //     </View>
        //     <View style={{margin:20}}>
        //         <Button title ='TimePicker' onPress={()=> showMode('time')}/>
        //     </View>

        //     {show &&(
        //         <DateTimePicker
        //             testID='dateTimePicker'
        //             value = {date}
        //             mode = {mode} 
        //             is24Hour ={true}
        //             display='default'
        //             onChange={onChange}
                
        //         />
        //     )}

        //     <StatusBar style="auto"/>

        // </View>
        <Block flex={1} style={styles.settings}>
        <Block flex={0.5} row style={{ alignItems: 'center',justifyContent: 'center', }}>
          <Block column style={{ alignItems: 'center',justifyContent: 'center', }}>
            {/* <Icon size={theme.sizes.font * 4} color={theme.colors.gray2} /> */}
            <Block flex={1.5} row style={{ alignItems: 'center', justifyContent: 'center', }}>
            {/* <LightOnIcon size={100} /> */}
            </Block>
            <Text caption>Light</Text>
          </Block>
          <Block flex={1.5} center>
            <PanSlider />
          </Block>
        </Block>
        <Block flex={1} style={{ paddingTop: theme.sizes.base * 2 }}>
        
          <Block column style={{ marginVertical: theme.sizes.base * 3 }}>
            <Block row space="between">
              <Text welcome color="black" style={{margin:10,
    fontWeight:'bold',fontSize: 23}}>Status</Text>
              <ToggleSwitch style = {styles.left_footer} 
              isOn={this.state.toggleButton}
              onColor="#72cc50"
              offColor="#BEBEBE"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="large"
              onToggle={isOn => this.setState({toggleButton:isOn}) }
              />
            </Block>
            
          </Block>

          <Block column style={{ marginVertical: theme.sizes.base * 3 }}>
            <Block row space="between">
              {/* <Text welcome color="black" style={{margin:10,
    fontWeight:'bold',fontSize: 23}}>Set time</Text> */}
              <Routine/>
            </Block>
            
          </Block>
        </Block>
                

        
      </Block>

    
    );
            
            }
}

Testing.defaultProps = {
    settings: mocks,
  }
export default Testing;


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})