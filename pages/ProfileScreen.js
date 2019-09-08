import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';
import ProfileHead from '../components/ProfileHead';
import ProfileBody from '../components/ProfileBody';
import Certificate from '../components/Certificate';

class ProfileScreen extends Component {

    static navigationOptions = {
        headerTitle: "Profile Screen",
        
      };

    render = () => {
        return (
            <SafeAreaView>
                <ScrollView>
                   <ProfileHead navigation={this.props.navigation}/>
                   <ProfileBody />
                   <Certificate />
                </ScrollView>
            </SafeAreaView>
        ) 
    }

}

export default ProfileScreen;


