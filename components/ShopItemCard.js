import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {
    Button
} from 'react-native-elements';

export default function(props){
    return (
        <View style={{...styles.container,...props.style}}>
            <Text style={styles.description}>{props.description}</Text>
            <View style={styles.bottomContainer}>
                <Text style={styles.point}>{props.point + " Puan"}</Text>
                <View style={{flex:1}}/>
                <Button 
                buttonStyle={{
                    borderRadius:30,
                    borderColor:"#6D78F6"
                }} 
                titleStyle={{
                    color:"#6D78F6"
                }}
                type="outline" title="Hediyeyi Al"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 30,
        backgroundColor:"white",
        padding:10,
        paddingHorizontal:20
    },
    bottomContainer:{
        flex:1,
        flexDirection:"row",
        alignItems:"baseline"
    },
    point:{
        
        color:"white",
        paddingHorizontal:5,
        paddingVertical:5,
        borderRadius:2,
        backgroundColor:"#6D78F6"
    },
    description:{
        fontFamily:"semi",
        color:"#8D8D8F"
    }
});