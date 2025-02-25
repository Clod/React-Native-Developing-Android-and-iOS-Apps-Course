// App.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  const [inputValue1, setInputValue1] = useState('');
  const [storedValue1, setStoredValue1] = useState('');

  const [inputValue2, setInputValue2] = useState('');
  const [storedValue2, setStoredValue2] = useState('');

  // useEffect which will automatically retrieve any previously stored data 
  // from AsyncStorage and display it when the app starts. This helps maintain 
  // data persistence across app sessions.
  useEffect(() => {
    getData();
  }, []);

  const storeData = async ({ value1 = '', value2 = '' }) => {
    try {
      await AsyncStorage.setItem('@storage_Key1', value1);
      await AsyncStorage.setItem('@storage_Key2', value2);
      console.log('Data stored successfully');
      setInputValue1(''); // Clear input field 1
      setInputValue2(''); // Clear input field 2
    } catch (e) {
      console.error('Failed to save data', e);
    }
  };

  const getData = async () => {
    try {
      const value1 = await AsyncStorage.getItem('@storage_Key1');
      const value2 = await AsyncStorage.getItem('@storage_Key2');
      if (value1 !== null) {
        setStoredValue1(value1);
      }
      if (value2 !== null) {
        setStoredValue2(value2);
      }
      console.log('Data retrieved successfully');
    } catch (e) {
      console.error('Failed to retrieve data', e);
    }
  };

  const clearData = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key1');
      setStoredValue1('');
      await AsyncStorage.removeItem('@storage_Key2');
      setStoredValue2('');
      console.log('Data cleared successfully');
    } catch (e) {
      console.error('Failed to clear data', e);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>AsyncStorage Example</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Value 1:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter something..."
          value={inputValue1}
          onChangeText={setInputValue1}
        />
      </View>

      <View style={styles.inputContainer} >
        <Text style={styles.label}>Enter Value 2:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter something..."
          value={inputValue2}
          onChangeText={setInputValue2}
        />
      </View>

      <View style={styles.spacer} >
        <Button title="Store Data" onPress={() => storeData({ value1: inputValue1, value2: inputValue2 })} testID='storeData' />
        <Button title="Retrieve Data" onPress={getData} testID='retrieveData' />
        <Button title="Clear Data" onPress={clearData} testID='clearData' />
      </View>
      <Text style={styles.text} testID='storedId1'>Stored Value 1: {storedValue1}</Text>
      <Text style={styles.text} testID='storedId2'>Stored Value 2: {storedValue2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    verticalAlign: 'middle',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  spacer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    flexDirection: 'row'

  },
  text: {
    fontSize: 18,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default App;
