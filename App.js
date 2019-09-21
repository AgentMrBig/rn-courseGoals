import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, { key: Math.random().toString(), value: enteredGoal }]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" style={styles.addButton} onPress={addGoalHandler} />
      </View>
      <FlatList
        keyExtrator={(item, index) => item.key}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  input: {
    width: '75%',
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginRight: 5,
  },
  addButton: {
    margin: 5,
    backgroundColor: 'black'
  },


  scrollView: {

  }
});
