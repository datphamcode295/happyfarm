import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,SafeAreaView } from 'react-native';



// import Header from './components/header/header';
import Header from './components/Header';
import HumidityBox from './components/HumidityBox';
import Modal from './components/Modal';
import TemperatureBox from './components/TemperatureBox';

 


export default function App() {
  return (
<View style={styles.container}> 
  <Header/>
      
   
      <Text style={styles.titleText}> Happy Farm</Text>
      <View style={styles.dashboardcontainer}>
        <TemperatureBox/>
        
        <HumidityBox/>
      </View>
      <SafeAreaView style={styles.blockcontainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.modalContainer}>
          <Modal/>
          <Modal/>
          <Modal/>
          <Modal/>
          <Modal/>
          <Modal/>
          <Modal/>
          <Modal/>
          <Modal/>
          <Modal/>
          <Modal/>
          <Modal/>
        </View>
      </ScrollView>
    </SafeAreaView>
      
      
      
</View>
      
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:5,
  },
  scrollView: {
    width:'100%',
    backgroundColor: 'pink',
  },
  blockcontainer: {
    flex: 6, 
    justifyContent: 'center', 
    alignItems: 'center',
    width:370, 
    backgroundColor: '#88B8DA',
  },
  dashboardcontainer: {
    flex: 3, 
    flexDirection:'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    width:370, 
    // backgroundColor: '#88B8DA',
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold"
  },
  modalContainer:{
    flex:1,
    flexDirection: "row",
    flexWrap: 'wrap',
  }
});
