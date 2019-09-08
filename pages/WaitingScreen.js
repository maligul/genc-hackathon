import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet

} from 'react-native'; 

import TopListProfile from '../components/TopListProfile'
import Logo from '../assets/images/logo.png';
import Badge from '../components/Badge';
import WaitingMissions from '../components/WaitingMissions'

export default class WaitingScreen extends Component {

    render = () => {
        const {navigation} = this.props;
        return (
            <React.Fragment>
             <SafeAreaView style ={styles.page}>
            
                <Badge/>
                <ScrollView style ={styles.scroll}>
                  <TopListProfile />
                  <WaitingMissions />   

                    
                </ScrollView>
                
                
            </SafeAreaView>
  
            
        </React.Fragment>
        ) 
    }

}
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#F4F4F4",
        flex:1,
    },
    scroll:{
        paddingHorizontal:20
    }
})