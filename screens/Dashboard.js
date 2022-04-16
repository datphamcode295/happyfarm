import React, { Component } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart, Path } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import ToggleSwitch from 'toggle-switch-react-native'
import * as theme from '../theme';
import { Block, Text } from '../components';
import mocks from '../settings';
import { SafeAreaView } from 'react-native-safe-area-context';





class Dashboard extends Component {
  static navigationOptions = {
    header: null
  }

  state = {

    lightButton:false,
    fanButton:false,
    pumpButton:false,
    doorButton: false,
  }

  render() {
    const { navigation, settings } = this.props;
    const LightIcon = settings['light'].icon;
    const LightOnIcon = settings['lighton'].icon;
    const ACIcon = settings['ac'].icon;
    const TempIcon = settings['temperature'].icon;
    const PumpIcon = settings['pump'].icon;
    const HumidIcon = settings['humidity'].icon;
    const FanIcon = settings['fan'].icon;
    const OpenIcon = settings['open'].icon;
    const CloseIcon = settings['close'].icon;
    const WiFiIcon = settings['wi-fi'].icon;
    const ElectricityIcon = settings['electricity'].icon;

    return (
      
      <SafeAreaView style={styles.dashboard}>
        <Block column >
          <Text welcome>Hello</Text>
          <Text name>Happy Farm</Text>
        </Block>
        
        <Block row style={{ paddingVertical: 10 }}>
          <Block flex={1.5} row style={{ alignItems: 'flex-end', }}>
            <Text h1>34</Text>
            <Text h1 size={34} height={80} weight='600' spacing={0.1}>°C</Text>
          </Block>
          <Block flex={1} column>
            <Text caption>Humidity</Text>
            <LineChart
              yMax={100}
              yMin={0}
              data={[0, 20, 25, 15, 20, 55, 60]}
              style={{ flex: 0.8 }}
              curve={shape.curveNatural}
              svg={{ stroke: theme.colors.accent, strokeWidth: 3 }}
            />
          </Block>
        </Block>

        <ScrollView contentContainerStyle={styles.buttons} showsVerticalScrollIndicator={false}>
          <Block column space="between">
            
            
            <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Settings', { name: 'light' })}
              >
                <Block style={styles.button}>
                <ToggleSwitch style = {styles.left_footer} 
              isOn={this.state.lightButton}
              onColor="#72cc50"
              offColor="#BEBEBE"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="large"
              onToggle={isOn => this.setState({lightButton:isOn}) }
              />
                  <Text
                    button
                    style={styles.header}
                  >
                    {settings['light'].name}
                  </Text>
                  
                  {
                  this.state.lightButton?<LightOnIcon size={38} style={styles.footer} />:<LightIcon size={38} style={styles.footer} />
                  }
                  </Block>
              </TouchableOpacity>
              
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Settings', { name: 'temperature' })}
              >
                <Block style={styles.button}>
                <ToggleSwitch style = {styles.left_footer} 
              isOn={this.state.pumpButton}
              onColor="#72cc50"
              offColor="#BEBEBE"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="large"
              onToggle={isOn => this.setState({pumpButton:isOn}) }
              />
                  <Text
                    button
                    style={styles.header}
                  >
                    {settings['pump'].name}
                  </Text>
                  <PumpIcon size={38} style={styles.footer} />
                </Block>
              </TouchableOpacity>
            </Block>

            <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Settings', { name: 'wi-fi' })}
              >
                <Block style={styles.button}>
                <ToggleSwitch style = {styles.left_footer} 
              isOn={this.state.doorButton}
              onColor="#72cc50"
              offColor="#BEBEBE"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="large"
              onToggle={isOn => this.setState({doorButton:isOn}) }
              />
              
                <Text
                    button
                    style={styles.header}
                  >
                    {settings['open'].name}
                  </Text>
                  {
                    this.state.doorButton?<OpenIcon size={38} style={styles.footer} />:<CloseIcon size={38} style={styles.footer} />
                  }
                  
              
                  
              
                </Block>
              </TouchableOpacity>
              
              
              <TouchableOpacity
    
    activeOpacity={0.8}
                onPress={() => navigation.navigate('Settings', { name: 'ac' })}
              >
                <Block style={styles.button}>
                <ToggleSwitch style = {styles.left_footer} 
              isOn={this.state.fanButton}
              onColor="#72cc50"
              offColor="#BEBEBE"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="large"
              onToggle={isOn => this.setState({fanButton:isOn}) }
              />
              
                  <Text
                    button
                    style={styles.header}
                  >
                    {settings['fan'].name}
                  </Text>
                  <FanIcon size={38} style={styles.footer} />
                </Block>
              </TouchableOpacity>
            </Block>
            <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Settings', { name: 'temperature' })}
              >
                <Block center middle style={styles.button}>
                  <TempIcon size={38} />
                  <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    {settings['temperature'].name}
                  </Text>
                </Block>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Settings', { name: 'electricity' })}
              >
                <Block center middle style={styles.button}>
                  <HumidIcon size={38} />
                  <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    {settings['humidity'].name}
                  </Text>
                </Block>
              </TouchableOpacity>
      
            </Block>
          </Block>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

Dashboard.defaultProps = {
  settings: mocks,
}

export default Dashboard;

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    padding: theme.sizes.base,
    marginBottom: -theme.sizes.base * 6,
    marginTop:-10
  },
  buttons: {
    flex: 1,
    marginBottom: -theme.sizes.base * 6,
  },
  button: {
    backgroundColor: theme.colors.button,
    width: 170,
    height: 151,
    borderRadius: 151 / 4,
    
  },
  header: {
    position: 'absolute',
    top: 15,
    left: 25,
    height: 50,
    fontWeight:'bold',
},
  footer:{
    position: 'absolute',
    bottom: 15,
    right: 16,
  },
  left_footer:{
    position: 'absolute',
    bottom: 15,
    left: 10,
  },
})