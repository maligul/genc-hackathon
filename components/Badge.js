import React  from 'react';
import {
    View
} from 'react-native';
export default function(props){
    return (
        <View style={{backgroundColor:"#6E77F6",height:20,borderBottomRightRadius:20,borderBottomLeftRadius:20,...props.style}}/>
    );
}