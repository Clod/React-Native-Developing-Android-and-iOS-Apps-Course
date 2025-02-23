
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../navigation/TabNavigator';

export default function DairyScreen() {
  const items = [
    { name: 'Milk', price: '$2.50', image: 'assets/images/dairy_images/milk.jpg' },
    { name: 'Cheese', price: '$3.75', image: 'assets/images/dairy_images/cheese.jpg' },
    { name: 'Yogurt', price: '$1.20', image: 'assets/images/dairy_images/yogurt.jpg' },
    { name: 'Butter', price: '$2.00', image: 'assets/images/dairy_images/butter.jpg' },
    { name: 'Ghee', price: '$2.00', image: 'assets/images/dairy_images/ghee1.jpg' },
    { name: 'Ghee', price: '$2.00', image: 'assets/images/dairy_images/ghee2.jpg' },


  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Fresh dairy products for you from folders</Text>
      {items.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity style={styles.button} onPress={() => alert(`${item.name} added to cart`)}>
              <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
