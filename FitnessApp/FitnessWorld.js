import React from 'react';
import { View, Text, Button, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Define image paths
const imagePaths = {
  fullBody: require('./assets/images/full_body_workout.jpg'),
  cardioBlast: require('./assets/images/cardio_blast.jpg'),
  yogaFlex: require('./assets/images/yoga_flexibility.jpg'),
  zumba: require('./assets/images/zumba_class.jpg'),
  circuit: require('./assets/images/circuit_training.jpg'),
  pilates: require('./assets/images/pilate_training.jpg'),
  strength: require('./assets/images/strength_training.jpg'),
  cardio: require('./assets/images/cardio.jpg'),
  yoga: require('./assets/images/yoga.jpg'),
};

const PopularworkoutPlans = [
  { id: '1', title: 'Full Body Workout', description: '45 minutes of full body exercise', duration: '45 min', image: imagePaths.fullBody },
  { id: '2', title: 'Cardio Blast', description: '30 minutes of intense cardio training', duration: '30 min', image: imagePaths.cardioBlast },
  { id: '3', title: 'Yoga for Flexibility', description: '1 hour yoga session for flexibility', duration: '60 min', image: imagePaths.yogaFlex },
];

const IntenseWorkoutPlans = [
  { id: '1', title: 'Zumba Class', description: '30 minutes of zumba classes', duration: '30 min', image: imagePaths.zumba },
  { id: '2', title: 'Circuit Training', description: '20 minutes of circuit training', duration: '20 min', image: imagePaths.circuit },
  { id: '3', title: 'Pilate Training', description: '60 minutes of pilate training', duration: '20 min', image: imagePaths.pilates },
];

export default function FitnessWorld() {

  const renderWorkout = ({ item }) => (
    <View style={styles.workoutCard}>
      <Image
        source={item.image}
        style={styles.workoutImage}
        resizeMode="cover"
      />
      <Text style={styles.workoutTitle}>{item.title}</Text>
      <Text style={styles.workoutDescp}>{item.description}</Text>
      <Text style={styles.workoutDescp} testID="workoutDescp">Duration: {item.duration}</Text>
      <TouchableOpacity style={styles.joinButton} onPress={() => alert(`Joined ${item.title}`)}>
        <Text style={styles.buttonText}>Join Now</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <ScrollView style={styles.container}>

      <View style={styles.section}>
        <Text style={styles.header}>Start Your Fitness Journey</Text>
        <Text style={styles.workoutDescp}>Welcome to join fitness journey, where every rep brings you closer to your best self. Let’s crush your fitness goals together!</Text>
        <Text style={styles.headerbenefit}>Benefits of Our Fitness Programs</Text>
        <Text style={styles.text}>Build muscle strength</Text>
        <Text style={styles.text}>Improve cardiovascular health</Text>
        <Text style={styles.text}>Increase flexibility and balance</Text>
        <Text style={styles.text}>Mental clarity and focus</Text>
      </View>


      {/* Featured Training Types Section */}
      <View style={styles.section}>
        <Text style={styles.header}>Featured Training Types</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.trainingTypeCard}>
          <Image
            source={imagePaths.strength}
            style={styles.trainingImage}
            resizeMode="cover"
          />
          <Text style={styles.trainingTitle}>Strength Training</Text>
        </View>
        <View style={styles.trainingTypeCard}>
          <Image
            source={imagePaths.cardio}
            style={styles.trainingImage}
            resizeMode="cover"
          />
          <Text style={styles.trainingTitle}>Cardio</Text>
        </View>
        <View style={styles.trainingTypeCard}>
          <Image
            source={imagePaths.yoga}
            style={styles.trainingImage}
            resizeMode="cover"
          />
          <Text style={styles.trainingTitle}>Yoga</Text>
        </View>
      </ScrollView>

      {/*Popular Workout Plans Section */}
      <View style={styles.section}>

        <Text style={styles.header}>Popular Workout Plans</Text>

        <FlatList
          data={PopularworkoutPlans}
          renderItem={renderWorkout}
          keyExtractor={(item) => item.id}
          horizontal={true} // Display workouts horizontally
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/*Intense Workout Plans Section*/}

      <View style={styles.section}>
        <Text style={styles.header}>Intense Workout Plans</Text>
        <FlatList
          data={IntenseWorkoutPlans}
          renderItem={renderWorkout}
          keyExtractor={(item) => item.id}
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'blue',
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'yellow',
  },
  headerbenefit: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  workoutDescp: {
    textAlign: 'center',
    color: '#ff7f00',
  },
  trainingTypeCard: {
    marginRight: 20,
    width: 150,
    alignItems: 'center',
  },
  trainingImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  trainingTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  workoutCard: {
    marginRight: 20,
    width: 200,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  workoutImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
    textAlign: 'center'
  },
  joinButton: {
    marginTop: 10,
    backgroundColor: '#ff7f00',
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
