import React, { Component,useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, Slider,View, Button, Platform } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from 'toggle-switch-react-native';

import { StatusBar } from "expo-status-bar";

import DateTimePicker from '@react-native-community/datetimepicker';

import { SafeAreaView } from 'react-native-safe-area-context';
import * as theme from '../theme';
import { Block, Text, PanSlider } from '../components';
import mocks from '../settings';
import RoutineScreen from './RoutineScreen';

class Pump extends Component {


  constructor () {
    super();
    this.state = {
      toggleButton:false,
      timeButton:false,
    };
    this.clickToggle = this.clickToggle.bind(this)
  }

  clickToggle(status) {
    fetch(`https://io.adafruit.com/api/v2/${this.props.route.params.username}/feeds/pump/data?X-AIO-Key=${this.props.route.params.password}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({datum:{value:status}})
    }).then(res=>res.json())
    // .then(console.log);
  }

  componentDidMount(){
    const adalink = `https://io.adafruit.com/api/v2/${this.props.route.params.username}/feeds/pump/data?X-AIO-Key=${this.props.route.params.password}`
    // console.log(this.props.route)
    fetch(adalink).then(res=>res.json())
        .then(res=>{
          
          this.setState({toggleButton:res[0].value=='ON'})
        })
        .catch(console.log)
  }
  
  render() {
    const { route,navigation, settings } = this.props;
    
    
    const PumpIcon = settings['pump'].icon;

    

    return (
      <SafeAreaView style={styles.dashboard}>
      <Block flex={1} style={styles.settings}>
        <Block flex={0.5} row style={{ alignItems: 'center',justifyContent: 'center', }}>
          <Block column style={{ alignItems: 'center',justifyContent: 'center', }}>
            {/* <Icon size={theme.sizes.font * 4} color={theme.colors.gray2} /> */}
            <Block flex={1.5} row style={{ alignItems: 'center', justifyContent: 'center', }}>
            <PumpIcon size={100} />
            </Block>
            <Text caption>Pump</Text>
          </Block>
          {/* <Block flex={1.5} center>
            <PanSlider />
          </Block> */}
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
              onToggle={isOn => {
                this.clickToggle(isOn?"ON":"OFF")
                this.setState({toggleButton:isOn})} }
              />
            </Block>
            
          </Block>

          <Block column style={{ marginVertical: theme.sizes.base * 0.5 }}>
            <Block row space="between" alignItems='center'>
              <Text welcome color="black" style={{margin:10,
              fontWeight:'bold',fontSize: 23}}>Set time</Text>
           
            </Block>
           
          </Block>
          
            
             <Block flex={1} column >
               <RoutineScreen topic="pump" uid={this.props.route.params.uid}/>
               </Block>
          

      
        </Block>


        
      </Block>
      </SafeAreaView>
    )
  }
}

Pump.defaultProps = {
  settings: mocks,
}

export default Pump;

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    padding: theme.sizes.base,
    marginBottom: -theme.sizes.base * 6,
    marginTop:-10
  },
  settings: {
    padding: theme.sizes.base * 2,
  },
  slider: {
  },
  settime:{

  }
})
