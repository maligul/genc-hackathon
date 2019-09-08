import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import CardWithAvatar from './CardWithAvatar';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
class ProfileHead extends Component {
    render = () => {
        return (
          <View style={{paddingTop: 20}}>
            <CardWithAvatar 
                url = { 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}
             >
                <View style ={styles.name}><Text style ={{fontFamily: 'bold', fontSize:17}}>Yusuf Burakhan SERT</Text></View>
                     <View style = {styles.confirmButton}>
                        <Button
                             title ='Profilinizi onaylayin'
                             titleStyle= {{fontSize: 12,}}
                             type = 'solid'
                             buttonStyle = {{backgroundColor:'#7853F3', height:25, width:125, borderRadius:8,}}
                             containerStyle ={{alignItems:'center', justifyContent:'center', }}
                        />
                      </View> 
                    <View style ={styles.info}>
                        <View style ={styles.cell}><Text>Basarili gorev</Text><Text>1</Text></View>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Waiting')}}>
                        <View style = {styles.cell}><Text>Bekleyen Gorev</Text><Text>5</Text></View>
                        </TouchableOpacity>
                        
                        <View style ={styles.cellEnd}><Text>Degerlendirme</Text><View style ={styles.profileRate}><Icon name="star" size={15}  color="#FFD202" /><Text>4,2</Text></View></View>


                    </View>
             </CardWithAvatar>
          </View>
        ) 
    }
}
const styles = StyleSheet.create({
    confirmButton: {
        alignContent:'center',
        justifyContent: 'center',
    },
    info:{
        flexDirection: 'row',
        flex:1,
        padding:10,
        
    },
    cell:{
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        justifyContent:'center',
        borderRightWidth:1,
        borderRightColor: 'black',
        
    },
    cellEnd:{
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        justifyContent:'center',
        
},

    name: {
        marginTop: 10,
        alignItems: 'center',
    },
    profileRate :{
        flexDirection: "row",
        alignItems: "center",

    }
})
export default ProfileHead;


