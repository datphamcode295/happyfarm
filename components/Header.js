import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import UserAvatar from 'react-native-user-avatar'


export default function Header() {
  return (
    <View style={styles.container}>
      
      <Icon name="bars" size={30} color="#1c1c1c"/>
      <UserAvatar size={50} name="Avishay Bar" src="https://dummyimage.com/100x100/000/fff" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor:'yellow',
    flexDirection: "row",
    width:'100%',
    height:20,
    padding:10,
    paddingTop:15,


  },
});