import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import {
    Button
} from 'react-native-elements';

import CardWithAvatar  from './CardWithAvatar';

export default function MissionCard(props){

    const {
        charityName,
        photoUrl,
        point,
        description,
        width,
        style
    } = props;

    return (
        <CardWithAvatar
            width={width}
            url={photoUrl}
            style={style}
            onPress={props.onPress}
        >
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.title}>{charityName}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    buttonStyle={{
                        padding:3,
                        borderRadius:20
                    }}
                    containerStyle={styles.button}
                    title={point + " puan"}
                />
            </View>
            </TouchableOpacity>
        </CardWithAvatar>
    );

}

const styles = StyleSheet.create({
    title:{
        fontFamily:"bold",
        textAlign:"center"
    },
    text:{
        fontFamily:"regular", 
        textAlign:"center"
    },
    button:{
        width:75
    },
    buttonContainer:{
        marginTop:5,
        flex:1,
        alignItems:"flex-end",
        justifyContent:"flex-end"
    }
});
