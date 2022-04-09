import { StyleSheet, Text, View } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



export default function TemperatureBox() {
  return (
    <View style={styles.container}>
      
        <Text style={styles.titleText}>30.5</Text>
        <Text style={styles.cText}>°C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    // justifyContent: '',

  },
  titleText: {
    fontSize: 70,
    fontWeight: "bold",
    // backgroundColor:"yellow",
    marginBottom:0,
    lineHeight:100
  },
  cText:{
    fontSize: 20,
    fontWeight: "bold",
    // backgroundColor:"pink",
    lineHeight:60
  }
});