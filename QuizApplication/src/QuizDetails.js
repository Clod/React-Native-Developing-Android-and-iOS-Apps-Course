import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const QuizDetails = () => {

  // Get the questions and currentQuestionIndex from the Redux store
  // quesions is an array of objects, each object represents a question
  // currentQuestionIndex is a number that represents the index of the current question
  // The useSelector hook is used to access the state from the Redux store
  // state.quiz is the slice of state that we are interested in
  const { questions, currentQuestionIndex } = useSelector((state) => state.quiz);

  return (
    <View style={styles.detailsContainer}>
      {/* Display the current question number and the total number of questions */}
      <Text style={styles.detailsText} testID='currentQuestion'>
        Question {currentQuestionIndex + 1} of {questions.length}
      </Text>
      {/* Display the total number of questions */}
      <Text style={styles.detailsText} testID='totalCurrentQuestion'>
        Total Questions: {questions.length}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    marginBottom: 20,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.5,
    elevation: 5,
  },
  detailsText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
});

export default QuizDetails;
