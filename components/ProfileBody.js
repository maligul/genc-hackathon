import React, {Component} from 'react';
import {
   View,
   StyleSheet,
   Text
} from 'react-native';
;


class ProfileBody extends Component {

    render = () => {
        return (
        <View style ={styles.hiza}>
           
            <View style ={styles.roundView}><Text style={{fontSize: 15, fontFamily: 'semi'}}>PUANIM</Text><Text style = {{fontSize:48, fontFamily:'bold'}}>250</Text></View>
        </View>
        ) 
    }

}
const styles = StyleSheet.create({
    roundView: {
        borderColor: "gray",
        width:220,
        height: 220,
        borderRadius: 220,
        borderWidth: 10,
        alignItems:"center",
        justifyContent: "center"
    },
    hiza:{
        padding:30,
        alignItems:"center",
        justifyContent: "center",
        flexDirection: 'column',
        flex:1,
    }
})
export default ProfileBody;


