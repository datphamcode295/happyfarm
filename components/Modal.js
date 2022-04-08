import { StyleSheet, Text, View } from 'react-native';
import Block from './Block';



export default function Modal() {
  return (
   
        <Block style={styles.dashboard}>
            <Block column style={{ marginVertical: theme.sizes.base * 2, }}>
          <Text welcome>Hello</Text>
          <Text name>John Doe</Text>
        </Block>
        </Block>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboard: {
    flex: 1,
    padding: theme.sizes.base * 2,
    marginBottom: -theme.sizes.base * 6,
  },
});