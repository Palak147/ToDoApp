/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import ToDoListScreen from './screens/ToDoListScreen';
import ErrorScreen from './screens/ErrorScreen';

const App: () => React$Node = () => {

  const [error, setError] = useState(false);

  const apiRequestErrorHandler = errorState => {
    setError(errorState)
  }

  const reloadButtonHandler = () => {
    setError(false);
  }

  let content = (<ToDoListScreen errorHandler={apiRequestErrorHandler} />)
  if(error){
    content = (<ErrorScreen reloadHandler={reloadButtonHandler} />)
  }
  return (
    <View style={styles.screen} >
      {content}
    </View>

  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    flex: 1,
  }
});

export default App;
