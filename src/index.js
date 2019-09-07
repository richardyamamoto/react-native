import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
});

console.tron.log('To No tron');
export default function App() {
  return (
    <View styles={styles.container}>
      <Text styles={styles.welcome}>Hello World!</Text>
    </View>
  );
}
