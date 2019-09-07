import React from 'react';
import {
    View
} from 'react-native';

export default function(props){
    return (
        <View style={{height:2,backgroundColor:"#F4F4F4",marginVertical:20,...props.style}}  />
    )
}