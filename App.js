import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// import Header from './components/header/header';
import Header from './components/Header';
import HumidityBox from './components/HumidityBox';
import TemperatureBox from './components/TemperatureBox';



export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text> Happy Farm</Text>
      <View>
        <TemperatureBox/>
        <HumidityBox/>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
