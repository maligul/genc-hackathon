import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';
import List from '../components/List';

class TopListScreen extends Component {

    static navigationOptions = {
        headerTitle: "Top List Screen",
        
      };
    render = () => {
        return (
            <SafeAreaView>
                <ScrollView>
                    <List />
                </ScrollView>
            </SafeAreaView>
        ) 
    }

}

export default TopListScreen;


