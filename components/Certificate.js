import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';


class Certifificate extends Component {


    render = () => {
        return (
           <View style ={{padding: 30}}>
           <View><Text style ={{fontFamily:'semi', fontSize: 21, color:'gray'}}>Sertifikalarim</Text></View>
           <View><Text>Su an icin hic bir sertifikan bulunmamakta, calismaya devam</Text></View>
           </View>
        ) 
    }

}

export default Certifificate;
