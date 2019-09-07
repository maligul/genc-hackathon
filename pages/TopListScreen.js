import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';

class TopListScreen extends Component {

    static navigationOptions = {
        headerTitle: "Profile Screen",
        
      };
    render = () => {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Text>TopListScreen Screen</Text>
                </ScrollView>
            </SafeAreaView>
        ) 
    }

}

export default TopListScreen;


