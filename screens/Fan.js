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

class Fan extends Component {


  state = {
    // direction: 45,
    // speed: 12,
    toggleButton:false,
  
  }

  
          
  
  render() {
    const { route,navigation, settings } = this.props;
    
    
    const FanIcon = settings['fan'].icon;

    

    return (
      <Block flex={1} style={styles.settings}>
        <Block flex={0.5} row style={{ alignItems: 'center',justifyContent: 'center', }}>
          <Block column style={{ alignItems: 'center',justifyContent: 'center', }}>
            {/* <Icon size={theme.sizes.font * 4} color={theme.colors.gray2} /> */}
            <Block flex={1.5} row style={{ alignItems: 'center', justifyContent: 'center', }}>
            <FanIcon size={100} />
            </Block>
            <Text caption>Fan</Text>
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

          <Block column style={{ marginVertical: theme.sizes.base * 0.5 }}>
            <Block row space="between" alignItems='center'>
              <Text welcome color="black" style={{margin:10,
              fontWeight:'bold',fontSize: 23}}>Set time</Text>
              
              <Routine/>
            </Block>
            
          </Block>
        </Block>


        
      </Block>
      
    )
  }
}

Fan.defaultProps = {
  settings: mocks,
}

export default Fan;

const styles = StyleSheet.create({
  settings: {
    padding: theme.sizes.base * 2,
  },
  slider: {

  }
})
