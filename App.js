import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,SafeAreaView } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

import Dashboard from './screens/Dashboard';
import Settings from './screens/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator 
      screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home Page" component={Dashboard}/>

      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Settings" component={Settings}/>
      
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
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
