import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from '../components/Header';

const ErrorScreen = props =>{
    return(
        <View style={styles.screen}>
            <Header>Todo List</Header>
            <View style={styles.errorView}>
                <Text style={styles.textStyles1}>Something went wrong</Text>
                <Text style={styles.textStyles2}>Give it another try</Text>
                <Button title="RELOAD" onPress={props.reloadHandler}></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
   screen:{
    flex:1,
   },
   errorView :{
       flex:1,
       alignItems:'center',
       justifyContent : 'center',
   },
   textStyles1:{
        fontSize:22,
        fontWeight:"bold",
        color:'rgb(93,93,93)'
   },
   textStyles2:{
        marginVertical:10,
        fontSize:16,
        color:'rgb(129,129,129)'
   }
});

export default ErrorScreen;