import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { answerQuestion, resetQuiz } from './store';
import QuizDetails from './QuizDetails';

const Quiz = () => {
  // Get the questions, currentQuestionIndex, and score from the Redux store
  // quesions is an array of objects, each object represents a question
  // currentQuestionIndex is a number that represents the index of the current question
  // score is a number that represents the number of correct answers
  // The useSelector hook is used to access the state from the Redux store
  // state.quiz is the slice of state that we are interested in
  const { questions, currentQuestionIndex, score } = useSelector((state) => state.quiz);

  // Pick the current question from the questions array using the currentQuestionIndex
  const currentQuestion = questions[currentQuestionIndex];

  // quizQuestions [index] has structure:
  //   {
  //     question: "",
  //     options: ["", "", "", ""],
  //     answer: "",
  //   }

  const dispatch = useDispatch();

  // onPress handler for the answer buttons
  // Receives the answer as a parameter and dispatches the answerQuestion action
  const handleAnswer = (answer) => {
    // calls the answerQuestion reducer of quizSlice with the answer as an argument
    // answerQuestion checks if the answer is correct and updates the score and currentQuestionIndex accordingly
    dispatch(answerQuestion(answer));
  };

/*
What Happens When an Action is Dispatched?
Action is Created: When you call answerQuestion('Option A'), Redux Toolkit creates an action object:

    {
      type: 'quiz/answerQuestion',
      payload: 'Option A',
    }

Action is Dispatched: The action is sent to the Redux store using dispatch.

Reducer Handles the Action: The quizSlice.reducer receives the action and updates the state based on the logic you defined in the answerQuestion reducer:

    answerQuestion: (state, action) => {
      if (state.questions[state.currentQuestionIndex].answer === action.payload) {
        state.score += 1;
      }
      state.currentQuestionIndex += 1;
    }

State is Updated: The store’s state is updated, and any connected React components re-render with the new state.

*/

  // If the quiz is completed, display the score
  if (currentQuestionIndex >= questions.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Quiz Completed!</Text>
        <Text style={styles.scoreText}>Your Score: {score}/{questions.length}</Text>
        <View>
          <Button title="Restart Quiz" onPress={() => dispatch(resetQuiz())} color="#FF4081" />
        </View>
      </View>
    );
  }

  // If the quiz is not completed, display the current question and options
  return (
    // The ImageBackground component is used to display a background image
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <QuizDetails />
        <View style={styles.questionContainer}>
          {/* Display current question */}
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          {/* Display options as buttons using map to iterate over the options array */}
          <View style={styles.buttonContainer}>
            {/* When a user selects an option, the handleAnswer function is called with the selected option as an argument.
            The handleAnswer function dispatches the answerQuestion action with the selected option from the array as the payload. */}
            {currentQuestion.options.map((option) => (<Button key={option} title={option} onPress={() => handleAnswer(option)} color="#FF4081" />))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF',
  },
  scoreText: {
    fontSize: 22,
    marginTop: 20,
    color: '#4CAF50',
  },
  questionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    height: 300,
    width: 500,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
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
export default Quiz;
