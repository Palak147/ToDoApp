import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const Header = props =>{
return(
    <View style={styles.titleView}>
        <Text style={styles.title}>
            {props.children}
        </Text>
    </View>
)
}

const styles = StyleSheet.create({
    titleView :{
        height :'10%',
        borderBottomWidth:2,
        borderBottomColor :'lightgrey',
        justifyContent :'center',
        alignItems:'center'
    },
    title:{
        fontSize : 28
    }
});

export default Header;