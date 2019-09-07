import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';

class ProfileScreen extends Component {

    static navigationOptions = {
        headerTitle: "Profile Screen",
        
      };
    render = () => {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Text>Profile Screen</Text>
                </ScrollView>
            </SafeAreaView>
        ) 
    }

}

export default ProfileScreen;


