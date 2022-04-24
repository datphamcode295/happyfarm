import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,SafeAreaView } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

import Dashboard from './screens/Dashboard';
import Settings from './screens/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResetScreen from './screens/ResetPassword';
import RoutineScreen from './screens/RoutineScreen';
import Temperature from './screens/Temperature';
import Humidity from './screens/Humidity';
import Routine from './screens/Routine';

 
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator 
      screenOptions={{
      headerShown: false
    }}>
      
      <Stack.Screen name="Dashboard" component={Dashboard}/>
      <Stack.Screen name="Routine" component={Routine}/>
      <Stack.Screen name="Home Page" component={Dashboard}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Temperature" component={Temperature}/>
      <Stack.Screen name="Humidity" component={Humidity}/>
      {/* <Stack.Screen name="Routine" component={RoutineScreen}/> */}
      <Stack.Screen name="Settings" component={Settings}/>
      <Stack.Screen name="ResetPassword" component={ResetScreen}/>
      
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
