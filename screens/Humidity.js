import React from 'react';
import { StyleSheet, Text, View, ScrollView,SafeAreaView, TextInput } from 'react-native';
import * as theme from '../theme';
import { Block } from '../components';
import mocks from '../settings';
// import { LineChart, Path } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {LineChart} from "react-native-chart-kit";

export default function Humidity() {

  const data = {
    labels: ["1am", "2am", "3am", "4am", "5am", "6am"],
    datasets: [
      {
        data: [20, 30, 45, 27, 30, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    
  };
  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `#17921f`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    
    useShadowColorFromDataset: false // optional
  };

  const [inputdate, setInputdate] = React.useState("")
  const [inputcvv, setInputcvv] = React.useState("")

  return (
    <ScrollView style={styles.dashboard}>
        
        <Block style={styles.container}>
        <Text style={styles.headerText}> Humidity </Text>
        <Block style={styles.CircleShape}>
          <View style={styles.container_inside}>
            
            <Text style={{ fontWeight: "bold",fontSize: 70, color: "#17921f"}}>34</Text>
            
          </View>
        </Block>
        <View > 
 
          <LineChart
        data={data}
        width={350}
        height={200}
        strokeWidth={16}
        withInnerLines={false}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
          />
  
          </View>

      <View style={styles.row}>
        <View style={styles.inputWrap}>
          <Text style={styles.label} >Lower bound</Text>
          <TextInput style={styles.inputdate} onChangeText = {(text) => setInputdate(text)}
          onSubmitEditing ={() => {
            alert(`Lower bound degree is: ${inputdate}`);
            setInputdate("");
          }}
          valueLB = {inputdate}
          clearButtonMode="always"
          placeholder = "Input here"
          placeholderTextColor="rgba(0, 128, 0, 0.3)" 
          keyboardType = "decimal-pad"
          keyboardAppearance = "light"
          returnKeyType = "done"
          />
          
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.label}>Upper bound</Text>
          <TextInput style={styles.inputcvv} maxLength={17} 
          onChangeText = {(text) => setInputcvv(text)}
          onSubmitEditing ={() => {
            alert(`Upper bound degree is: ${inputcvv}`);
            setInputcvv("");
          }}
          valueUB = {inputcvv}
          clearButtonMode="always"
          placeholder = "Input here"
          placeholderTextColor="rgba(0, 128, 0, 0.3)" 
          keyboardType = "decimal-pad"
          keyboardAppearance = "light"
          returnKeyType = "done"
          />
        </View>
      </View>
    

      </Block>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    // marginLeft: 40
  },
  inputWrap: {
    flex: 1,
    marginBottom: 10,
    alignItems: "center"
  },
  inputdate: {
    fontSize: 14,
    marginBottom: -12,
    color: "#6a4595",
    width:110,
    borderColor: "#17921f",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    // marginTop: 10
  },
  inputcvv: {
    fontSize: 14,
    marginBottom: -12,
    color: "#6a4595",
    width:110,
    borderColor: "#17921f",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    // marginTop: 10
  },
  label:{
    fontWeight: "bold",
    fontSize: 15, 
    // color: "#17921f"
  },
    dashboard: {
        flex: 1,
        padding: theme.sizes.base,
        marginBottom: -theme.sizes.base * 4,
        marginTop:-10,
        marginBottom:5
      },

    header:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-100,
        fontWeight: 'bold',
        fontSize:30,
     },


  container_inside:{
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",

  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    marginTop:80,
    fontWeight: "bold"
  }, 
  CircleShape: {
    width: 250,
    height: 250,
    margin: 60,
    fontSize:30,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 250 / 2,
    backgroundColor: 'white',
    borderColor: '#27db17',
    borderWidth: 3
  },
  bottom_block:{
    justifyContent: "center",
    alignItems: 'center',
    width: 350,
    height: 250,
    borderRadius: 50 / 2,
    borderColor: '#ECEDEC',
    borderWidth: 3

  },

});
