import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,SafeAreaView } from 'react-native';




 


export default function LoginScreen() {
  return (
<SafeAreaView style={styles.container}> 
   <Text>Login</Text>
      
      
</SafeAreaView>
      
   
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
