import React, { Component } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { LineChart, Path } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import ToggleSwitch from 'toggle-switch-react-native'
import * as theme from '../theme'
import { Block, Text } from '../components'
import mocks from '../settings'
import { SafeAreaView } from 'react-native-safe-area-context'
// import fetch from "node-fetch"
import {mqtt_connect, mqtt_disconnect} from '../mqtt.js'





class Dashboard extends Component {
  static navigationOptions = {
    header: null
  }
  constructor () {
    super();
    this.state = {
      temp:30,
      humiddata:[],
      lightButton:false,
      fanButton:false,
      pumpButton:false,
      doorButton: false,
      // uid:this.props.route.params.uid,
      uid:'M1Apv3xeMsWWirqfUJ01GheeT142',
      adaUsername:'',
      adaPassword:'',
      client:'',
    };
    this.handletemp = this.handletemp.bind(this)
    this.handledoor = this.handledoor.bind(this)
    this.handlefan = this.handlefan.bind(this)
    this.handlelight = this.handlelight.bind(this)
    this.handlepump = this.handlepump.bind(this)
    this.subscribeTopics = this.subscribeTopics.bind(this)
    this.onMessage = this.onMessage.bind(this)
    this.switchSetState = this.switchSetState.bind(this)
    this.clickToggle = this.clickToggle.bind(this)
  }


  

  handletemp(temp){
    this.setState({temp:temp})
  }
  handlelight(lightstatus){
    this.setState({lightButton:lightstatus=='ON'})
  }
  handlepump(pumpstatus){
    this.setState({pumpButton:pumpstatus=='ON'})
  }
  handledoor(doorstatus){
    this.setState({doorButton:doorstatus=='ON'})
  }
  handlefan(fanstatus){
    this.setState({fanButton:fanstatus=='ON'})
  }

  clickToggle(link, status) {
    // const link = `${this.state.adaUsername}/feeds/door`;
    fetch(`https://io.adafruit.com/api/v2/${link}/data?X-AIO-Key=${this.state.adaPassword}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({datum:{value:status}})
    }).then(res=>res.json())
    // .then(console.log);
    
}
  subscribeTopics (client) {
    // console.log(client)
    client.subscribe(`${this.state.adaUsername}/feeds/temp`)
    client.subscribe(`${this.state.adaUsername}/feeds/light`)
    client.subscribe(`${this.state.adaUsername}/feeds/pump`)
    client.subscribe(`${this.state.adaUsername}/feeds/door`)
    client.subscribe(`${this.state.adaUsername}/feeds/fan`)
    
  
    console.log("Subscribed to topics")
  }

  onMessage(message) {

  
    switch (message.destinationName) {
        case `${this.state.adaUsername}/feeds/temp`:
          console.log(`message : `, message)
          console.log(`message.payloadString : `, message.payloadString)
          this.handletemp(parseFloat(message.payloadString))
          break
        case `${this.state.adaUsername}/feeds/light`:
          
          this.handlelight((message.payloadString))
          break
        case `${this.state.adaUsername}/feeds/pump`:

          this.handlepump((message.payloadString))
          break

        case `${this.state.adaUsername}/feeds/door`:

          this.handledoor((message.payloadString))
          break
        case `${this.state.adaUsername}/feeds/fan`:
          this.handlefan((message.payloadString))
          break
 
    };
  }

  switchSetState(topic, status){
    switch (topic) {
      case 'light':
        this.setState({lightButton:status=='ON'})
        break
      case 'pump':
        this.setState({pumpButton:status=='ON'})
        break
      case 'fan':
        this.setState({fanButton:status=='ON'})
        break
      case 'door':
        this.setState({doorButton:status=='ON'})
        break
      case 'temp':
          this.setState({temp:status})
          break
      default:
        break
    }
  }
  // load = ()=>{
  //   console.log("loading...")
  // }
  componentDidMount(){
    console.log("run componentDidMount")

    const link = `http://10.0.2.2:8081/user?userid=${this.state.uid}`
    fetch(link).then(res=>res.json())
    .then(res=>{
      // console.log("got mongodata")
      this.setState({adaPassword:res.adaPassword, adaUsername:res.adaUsername})
    })
    .then(res=>{
      const listTopics = ['light', 'pump', 'fan', 'door','temp']
      for(let i =0; i< listTopics.length; i++){
        const adalink = `https://io.adafruit.com/api/v2/${this.state.adaUsername}/feeds/${listTopics[i]}/data?X-AIO-Key=${this.state.adaPassword}`
        fetch(adalink).then(res=>res.json())
        .then(res=>{
          // console.log("got ada data")
          // console.log(res[0].value)
          this.switchSetState(listTopics[i],res[0].value)
        })

        

      }
      
        const adalink = `https://io.adafruit.com/api/v2/${this.state.adaUsername}/feeds/humid/data?X-AIO-Key=${this.state.adaPassword}`
        fetch(adalink).then(res=>res.json())
        .then(res=>{
          let newdata = []
          for(let i =6;i>=0;i--){
            newdata.push(parseFloat(res[i].value))
          }
          this.setState({humiddata:newdata})

        })
        .catch(console.log)
    

      try{
        this.setState({client:mqtt_connect(this.onMessage, this.subscribeTopics,this.state.uid)}) 
   
       }
       catch(error){
         // console.log(error)
       }
    })
    .catch(console.log)
    // https://617bd868d842cf001711c0fe.mockapi.io/item2

    

    // this.props.navigation.addListener('willFocus', this.load)

  }
  // componentDidUpdate(){
  //   console.log("runnging componentDidUpdate")
  // }

  // componentWillUnmount(){
  //   mqtt_disconnect(this.state.client)
  //   console.log(this.state.client)
  //   console.log("mqtt disconnecting")
  // }
  



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
          <Block flex={1.5} row style={{ alignItems: 'flex-end',}}>
            <Text h1 size={75} height={160} weight='600' spacing={0.01}>{this.state.temp}</Text>
            <Text h1 size={34} height={80} weight='600' spacing={0.1}>°C</Text>
          </Block>
          <Block flex={1} column>
            <Text caption>Humidity</Text>
            <LineChart
              yMax={100}
              yMin={0}
              data={this.state.humiddata}
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
                onPress={() => {navigation.navigate('Light',{username:this.state.adaUsername, password:this.state.adaPassword})
                console.log(this.state.uid)}}
              >
                <Block style={styles.button}>
                <ToggleSwitch style = {styles.left_footer} 
              isOn={this.state.lightButton}
              onColor="#72cc50"
              offColor="#BEBEBE"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="large"
              onToggle={isOn => {
                this.clickToggle(`${this.state.adaUsername}/feeds/light`,isOn?'ON':'OFF')
                this.setState({lightButton:isOn})} }
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
                onPress={() => navigation.navigate('Pump',{username:this.state.adaUsername, password:this.state.adaPassword})}
                
              >
                <Block style={styles.button}>
                <ToggleSwitch style = {styles.left_footer} 
              isOn={this.state.pumpButton}
              onColor="#72cc50"
              offColor="#BEBEBE"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="large"
              onToggle={isOn => {
                this.clickToggle(`${this.state.adaUsername}/feeds/pump`,isOn?'ON':'OFF')
                this.setState({pumpButton:isOn})} }
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
              
                <Block style={styles.button}>
                <ToggleSwitch style = {styles.left_footer} 
              isOn={this.state.doorButton}
              onColor="#72cc50"
              offColor="#BEBEBE"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="large"
              onToggle={isOn => {
                this.clickToggle(`${this.state.adaUsername}/feeds/door`,isOn?'ON':'OFF')
                this.setState({doorButton:isOn})} }
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
              
              
              
              <TouchableOpacity
    
    activeOpacity={0.8}
                onPress={() => navigation.navigate('Fan',{username:this.state.adaUsername, password:this.state.adaPassword, uid:this.state.uid})}
              >
                <Block style={styles.button}>
                <ToggleSwitch style = {styles.left_footer} 
              isOn={this.state.fanButton}
              onColor="#72cc50"
              offColor="#BEBEBE"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="large"
            onToggle={isOn => {
              this.clickToggle(`${this.state.adaUsername}/feeds/fan`,isOn?'ON':'OFF')
              this.setState({fanButton:isOn})} }
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
                onPress={() => navigation.navigate('Temperature',{username:this.state.adaUsername, password:this.state.adaPassword,uid:this.state.uid})}
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
                onPress={() => navigation.navigate('Humidity',{username:this.state.adaUsername, password:this.state.adaPassword,uid:this.state.uid})}
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