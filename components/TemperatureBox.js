import { StyleSheet, Text, View } from 'react-native';



export default function TemperatureBox() {
  return (
    <View style={styles.container}>
      
        <Text> Temperature Box </Text>
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