import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    View,
    StyleSheet
} from 'react-native';
import{
    Avatar,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo'

class TopListProfile extends Component {
    render = () => {
        return(
          <SafeAreaView style= {{backgroundColor: "#F4F4F4"}}>
              <ScrollView>
               <View style ={styles.profileItem} >
                    <View style={styles.profileAvatar}><Avatar source ={require('../images/man.jpg')} size="large" rounded /></View>
                    <View style={styles.profileName}><Text
                    style={{fontFamily: "semi",
                            fontSize: 18,}}
                    >Burakhan</Text>
                    <View style={styles.profileRate}><Icon name="star" size={15}  color="#FFD202" /><Text>  4,2</Text></View>
                    </View>
                    <View  style={styles.profileScore}><Text style={{fontFamily: "bold", fontSize: 15,}}> 150 </Text></View>
               </View>
              </ScrollView>
          </SafeAreaView>
        )
      }

}
const styles = StyleSheet.create({
    profileItem: {
        flexDirection: 'row',
        alignItems: "center",
        height: 100,
        flex: 1,
        margin:20,
        backgroundColor:'white',
        borderRadius: 10,
    },
    profileAvatar:{
      
        paddingLeft:25,
        flex:2,    
    },
    profileScore :{
        flex:1,
       
    },
    profileName :{
        flex:3,
    },
    profileRate :{
        flexDirection: "row",
        alignItems: "center",

    }

})
export default TopListProfile;