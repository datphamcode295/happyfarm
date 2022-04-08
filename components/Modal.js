import { StyleSheet, Text, View } from 'react-native';


export default function Modal() {
  return (
   
    <View style={styles.blockcontainer}>
    <Text>aaa</Text>
  </View>

  );
}

const styles = StyleSheet.create({
  blockcontainer: {
    marginHorizontal: 2.5,
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 20 , 
    backgroundColor: '#9FA8DA',
    width:180,
    height:120,
    borderRadius:15
  },
  
});