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

  return (
    <SafeAreaView style={styles.dashboard}>
        
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
      </Block>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
    dashboard: {
        flex: 1,
        padding: theme.sizes.base,
        marginBottom: -theme.sizes.base * 4,
        marginTop:-10
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
