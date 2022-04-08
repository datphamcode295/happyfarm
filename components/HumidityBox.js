import { StyleSheet, Text, View } from 'react-native';



export default function HumidityBox() {
  return (
    <View style={styles.container}>
      
        <Text> Humidity Box </Text>
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