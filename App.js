import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

// import Header from './components/header/header';
import Header from './components/temp/index';
// import Headerer from './components/header';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
