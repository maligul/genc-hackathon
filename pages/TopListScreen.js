import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';
import List from '../components/List';
import TopListProfile from '../components/TopListProfile'

class TopListScreen extends Component {

    static navigationOptions = {
        headerTitle: "Top List Screen",
        
      };
    render = () => {
        return (
            <SafeAreaView>
                <ScrollView>
                    <TopListProfile />
                    <List />
                </ScrollView>
            </SafeAreaView>
        ) 
    }

}

export default TopListScreen;


