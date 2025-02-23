// App.js
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RegistrationForm from './RegistrationForm';
import Confirmation from './Confirmation';

const App = () => {

  const [registrationDetails, setRegistrationDetails] = useState(null);

  // Set the registrationDetails state with the form data
  const handleConfirm = (details) => {
    setRegistrationDetails(details);
  };

  // Clear the form by setting registrationDetails to null
  const handleBack = () => {
    setRegistrationDetails(null);
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* If registrationDetails is not null, render the Confirmation component with the details and onBack prop
      Otherwise, render the RegistrationForm component with the onConfirm prop */}
      {registrationDetails ? (
        <Confirmation details={registrationDetails} onBack={handleBack} />
      ) : (
        <RegistrationForm onConfirm={handleConfirm} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default App;
