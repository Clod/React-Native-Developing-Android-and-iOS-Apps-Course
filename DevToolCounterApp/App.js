import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React DevTools Example</Text>
      <Text style={styles.counter}>Counter: {counter}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increase" onPress={increaseCounter} color="#007AFF" />
        <View style={{ height: 10 }} />
        <Button title="Decrease" onPress={decreaseCounter} color="#FF3B30" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '10%',
    marginBottom: 20,
  },
});

export default App;
