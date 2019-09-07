import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import {
    Avatar
} from 'react-native-elements';

function CardWithAvatar(props){

    let padding= 10
    let {
        avatarSize = 75,
        borderRadius = 20,
        url = undefined,
        width = undefined,
        style
    } = props;

    const styles = StyleSheet.create({
        avatarContainer:{
            
            alignItems:"center",
            marginTop:-1* avatarSize /2
        },
        card:{
            width: width,
            marginTop: avatarSize / 2, 
            paddingRight: padding,
            paddingLeft: padding,
            paddingBottom: padding,
            borderRadius: borderRadius,   
            backgroundColor: "white"
        }
    });

    return (

        

        <View style={{...style,...styles.card}}>
            <View style={styles.avatarContainer}>
                <Avatar
                    size={avatarSize}
                    rounded
                    source={{
                        uri: url,
                    }}
                    />
            </View>
            
            {props.children}
        </View>
    );
}



export default CardWithAvatar;


