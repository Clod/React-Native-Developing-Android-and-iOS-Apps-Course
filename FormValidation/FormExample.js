import React from 'react';
import { View, Text, TextInput, Button, CheckBox, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Define validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
  address: Yup.string()
    .min(10, 'Address must be at least 10 characters')
    .required('Address is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  termsAccepted: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions'),
});

const FormExample = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title} testID='formTitle'>Registration Form</Text>

      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          address: '',
          password: '',
          confirmPassword: '',
          termsAccepted: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          //console.log(values);
          alert(
            `Name: ${values.name}\n` +
            `Email: ${values.email}\n` +
            `Phone: ${values.phone}\n` +
            `Address: ${values.address}\n` +
            `Password: ${values.password}\n` +
            `Confirm Password: ${values.confirmPassword}\n` +
            `Terms Accepted: ${values.termsAccepted}`
          );
        }}
      >
        {/* 
            handleChange is called whenever the value of the input field changes
            handleBlur is triggered when the input field loses focus, which will validate the field
            handleSubmit is used to submit the form
            values, errors, and touched are used to control and display the form's state and errors
          
            Although it looks rather scary, it is just an anonymous function that takes an object as an argument and returns JSX.
            The object contains the properties handleChange, handleBlur, handleSubmit, values, errors, and touched.
            Object's properites are destructured in the function's argument and they are used directly in the JSX.
          */}
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (

          <ScrollView contentContainerStyle={styles.container}>

            <View testID='formName'>
              <Text style={styles.label}>Name</Text>
              <TextInput style={styles.input} onChangeText={handleChange('name')} onBlur={handleBlur('name')} value={values.name} />
              {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
            </View>

            <View testID='formEmail'>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
            </View>

            <View testID='formPhone'>
              <Text style={styles.label}>Phone</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />
              {touched.phone && errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
            </View>

            <View testID='formAddress'>
              <Text style={styles.label}>Address</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
              />
              {touched.address && errors.address && <Text style={styles.error}>{errors.address}</Text>}
            </View>

            <View testID='formPassword'>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
            </View>

            <View testID='formConfirmPassword'>
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.error}>{errors.confirmPassword}</Text>
              )}
            </View>

            <View testID='formTermsAccepted'>
              <CheckBox
                value={values.termsAccepted}
                // onValueChange={handleChange('termsAccepted')}
                onValueChange={(newValue) => {
                  // Manually update the form state
                  setFieldValue('termsAccepted', newValue);
                }}
                onBlur={handleBlur('termsAccepted')}
              />
              <Text style={styles.label}>I accept the terms and conditions</Text>
              {touched.termsAccepted && errors.termsAccepted && (
                <Text style={styles.error}>{errors.termsAccepted}</Text>
              )}
            </View>

            <Button onPress={handleSubmit} title="Submit" color="#007BFF" />

          </ScrollView>

        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  container: {
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  error: {
    color: '#d9534f',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default FormExample;
