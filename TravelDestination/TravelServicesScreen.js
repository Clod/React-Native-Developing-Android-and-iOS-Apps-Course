import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const TravelServicesScreen = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://cdn.pixabay.com/photo/2018/02/01/06/45/travel-3122702_1280.jpg' }}
      style={styles.backgroundImage}
      blurRadius={5}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Our Travel Services</Text>
        <Text style={styles.service}>- Personalized Itineraries</Text>
        <Text style={styles.service}>- Luxury Accommodations</Text>
        <Text style={styles.service}>- Adventure Tours</Text>
        <Text style={styles.service}>- Family Vacations</Text>
        <Text style={styles.service}>- Romantic Getaways</Text>
        <Text style={styles.service}>- Cultural Experiences</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  service: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default TravelServicesScreen