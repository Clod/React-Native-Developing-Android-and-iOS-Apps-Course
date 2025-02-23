
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../navigation/TabNavigator';

export default function FruitsScreen() {
  const fruits = [
    { name: 'Apple', price: '$1.20', image: 'assets/images/fruit_images/apple.jpg' },
    { name: 'Banana', price: '$0.80', image: 'assets/images/fruit_images/banana.jpg' },
    { name: 'Grapes', price: '$2.00', image: 'assets/images/fruit_images/grapes.jpg' },
    { name: 'Mango', price: '$1.50', image: 'assets/images/fruit_images/mango.jpg' },
    { name: 'Orange', price: '$1.00', image: 'assets/images/fruit_images/orange.jpg' },
    { name: 'Strawberry', price: '$2.50', image: 'assets/images/fruit_images/strawberry.jpg' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Handpicked, extra juicy fruits </Text>
      {fruits.map((fruit, index) => (
        <View key={index} style={styles.itemContainer}>
          <Image source={{ uri: fruit.image }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{fruit.name}</Text>
            <Text style={styles.price}>{fruit.price}</Text>
            <TouchableOpacity style={styles.button} onPress={() => alert(`${fruit.name} added to cart`)}>
              <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
