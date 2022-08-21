import React from 'react';
import {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalImputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="kucaj bre!"
          onChangeText={goalImputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#4A148C" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#6A1B9A" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    paddingBottom: 80,
    borderTopWidth: 40,
    borderTopColor: '#4b0082',
    borderBottomWidth: 40,
    borderBottomColor: '#4b0082',
    backgroundColor: '#4527A0',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'green',
    width: '100%',
    padding: 10,
    color: 'orange',
    borderRadius: 5,
    backgroundColor: 'darkblue',
    fontSize: 20,
  },
  image: {
    width: 120,
    height: 120,
    margin: 20,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '40%',
    marginHorizontal: 15,
  },
});
