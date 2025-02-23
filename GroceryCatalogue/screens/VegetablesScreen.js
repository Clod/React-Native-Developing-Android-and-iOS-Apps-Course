
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { styles } from '../navigation/TabNavigator';

export default function VegetablesScreen() {
  const vegetables = [
    { name: 'Carrot', price: '$1.00', image: 'assets/images/vegetable_images/carrot.jpg' },
    { name: 'Cucumber', price: '$0.90', image: 'assets/images/vegetable_images/cucumber.jpg' },
    { name: 'Cabbage', price: '$1.00', image: 'assets/images/vegetable_images/cabbage.jpg' },
    { name: 'Broccoli', price: '$0.90', image: 'assets/images/vegetable_images/broccoli.jpg' },
    { name: 'Bell Peppers', price: '$1.00', image: 'assets/images/vegetable_images/bell_peppers.jpg' },
    { name: 'Tomato', price: '$0.90', image: 'assets/images/vegetable_images/tomato.jpg' },
  ];

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Fresh vegetables directy from farmers land</Text>

      {vegetables.map((vegetable, index) => (
        <View key={index} style={styles.itemContainer}>
          <Image source={{ uri: vegetable.image }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{vegetable.name}</Text>
            <Text style={styles.price}>{vegetable.price}</Text>
            <TouchableOpacity style={styles.button} onPress={() => alert(`${vegetable.name} added to cart`)}>
              <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>

      ))}
    </ScrollView>
  );
}
