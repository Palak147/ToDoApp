import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ToDoItem = props => {

    const completedIcon = require('../assets/Completed.png');
    const inProgressIcon = require('../assets/InProgress.png')
    let icon = props.completed ? completedIcon : inProgressIcon;
    return (
        <View style={styles.itemView}>
            <Image source={icon} style={styles.imageStyle}></Image>
            <View>
                <Text>{props.id}</Text>
                <Text>{props.title}</Text>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    itemView: {
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        height: 80,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    imageStyle: {
        width: 50,
        height: 50,
        marginHorizontal: 10
    }
});

export default ToDoItem;