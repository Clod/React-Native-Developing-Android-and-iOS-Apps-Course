import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

// Helper function to ensure valid string rendering
const safeString = (value) => (value !== undefined && value !== null ? String(value) : 'N/A');

// Function to get the current time in a specific time zone
const getTime = (timeZone) =>
  new Date().toLocaleString('en-US', {
    timeZone,
    timeStyle: 'medium',
    hourCycle: 'h12',
  });

// Function to get weather data for a city with error handling
const getWeather = async (city) => {
  try {
    const apiKey = '<API Key>; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.main) {
      return data.main.temp;
    } else {
      console.error(`Weather data not found for ${city}`);
      return 'N/A'; // Fallback value
    }
  } catch (error) {
    console.error(`Error fetching weather for ${city}:`, error);
    return 'N/A'; // Fallback value
  }

};


const TimeZoneStatus = () => {

  const [times, setTimes] = useState({});
  const [weatherData, setWeatherData] = useState({});

  const TimeBox = ({ city, time, weather }) => (
    <View style={styles.timebox}>
      <Text> Alguna mierda </Text>
      <Text style={styles.header}>{safeString(city)}</Text>
      <Text style={styles.time}>{safeString(time)}</Text>
      <Text style={styles.weather}>{`Temp: ${safeString(weather)}°C`}</Text>
    </View>
  );

  // Fetch weather data for multiple cities and update state once, when the component mounts
  useEffect(() => {
    const fetchWeatherData = async () => {
      const cities = ['Kolkata', 'Paris', 'New York', 'London', 'Tokyo', 'Sydney'];
      const weatherUpdates = await Promise.all(
        cities.map(async (city) => {
          const temp = await getWeather(city);
          return { city, temp };
        })
      );

      setWeatherData(
        weatherUpdates.reduce((acc, { city, temp }) => {
          acc[city] = temp;
          return acc;
        }, {})
      );
    };

    fetchWeatherData();
  }, []);

  // Update times every second
  useEffect(() => {
    const updateTimes = () => {
      setTimes({
        India: getTime('Asia/Kolkata'),
        Paris: getTime('Europe/Paris'),
        NewYork: getTime('America/New_York'),
        London: getTime('Europe/London'),
        Tokyo: getTime('Asia/Tokyo'),
        Sydney: getTime('Australia/Sydney'),
      });
    };

    updateTimes(); // Initial call
    const interval = setInterval(updateTimes, 1000); // Update every second

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1653903056453-a52d9a2df52b?q=80',
      }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <Text style={styles.heading}>Planet Pulse: Time & Weather</Text>
      <View style={styles.container}>
        <TimeBox city="India" time={times.India} weather={weatherData['Kolkata']} style={styles.clock1} />
        <TimeBox city="Paris" time={times.Paris} weather={weatherData['Paris']} style={styles.clock2} />
        <TimeBox city="New York" time={times.NewYork} weather={weatherData['New York']} style={styles.clock3} />
        <TimeBox city="London" time={times.London} weather={weatherData['London']} style={styles.clock4} />
        <TimeBox city="Tokyo" time={times.Tokyo} weather={weatherData['Tokyo']} style={styles.clock5} />
        <TimeBox city="Sydney" time={times.Sydney} weather={weatherData['Sydney']} style={styles.clock6} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Centers all content horizontally
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background for contrast
  },
  heading: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#F5C542',
    fontFamily: 'Brush Script MT',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 20, // Space between heading and clocks
  },
  container: {
    flex: 1,
    flexDirection: 'row', // Row layout for time boxes
    flexWrap: 'wrap', // Wrap timeboxes to the next row
    justifyContent: 'center', // Center align horizontally
    alignItems: 'center', // Center align vertically
  },
  timebox: {
    width: 150,
    height: 150,
    borderRadius: 75, // Perfect circle
    backgroundColor: 'rgba(37, 118, 142, 0.6)', // Semi-transparent circle background
    borderWidth: 4,
    borderColor: '#f5c542', // Golden border
    margin: 20, // Spacing between circles
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10, // Shadow for Android
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  time: {
    fontSize: 16,
    color: '#eee',
  },
  weather: {
    fontSize: 14,
    color: '#ddd',
    marginTop: 5,
  },
});


export default TimeZoneStatus;
