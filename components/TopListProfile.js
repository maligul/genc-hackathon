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

class TopListProfile extends Component {
    render = () => {
        return(
          <SafeAreaView>
              <ScrollView>
               <View style ={styles.profileItem} >
                    <View style={styles.profileAvatar}><Avatar source ={require('../images/man.jpg')} size="large" rounded /></View>
                    <View style={styles.profileName}><Text
                    style={{fontFamily: "semi",
                            fontSize: 18,}}
                    >Burakhan</Text></View>
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

    }

})
export default TopListProfile;