import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#9400d3'}}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#4A148C',
    borderColor: '#7f2a40',
    borderWidth: 2,
    opacity: 0.75,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'yellow',
    fontSize: 23,
    fontWeight: '600',
    textAlign: 'center',
    padding: 8,
  },
});
