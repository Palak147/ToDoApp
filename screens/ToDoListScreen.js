import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native';
import Header from '../components/Header'
import ToDoItem from '../components/ToDoItem';

const ToDoListScreen = props => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError,setIsError] = useState(false);
  const fetchData = () => {
     fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then((responseJson) => {
        setToDoList(responseJson)
        setIsLoading(false)
      })
      .catch(error => {
        setIsError(true);
        setIsLoading(false);
      })


  }

    if(isError){
      props.errorHandler(isError);
    }

  useEffect(fetchData,[fetchData]);
  const [toDoList, setToDoList] = useState();

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0c9" />
      </View>)
  } else {
    return (
      <View style={styles.screen}>
        <Header>Todo List</Header>
        <FlatList keyExtractor={(item, index) => item.id.toString()}
          data={toDoList}
          renderItem={itemData => <ToDoItem
            id={itemData.item.id}
            title={itemData.item.title}
            completed={itemData.item.completed} />} />

      </View>
    );
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  loader: {
    flex : 1,
    justifyContent:'center'
  }
});

export default ToDoListScreen;