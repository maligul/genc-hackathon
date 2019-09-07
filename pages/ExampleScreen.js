import React,{Component} from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';

class ExampleScreen extends Component {
    static navigationOptions = {
        headerTitle: "Example Screen",
        
      };
    render = () => {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Text>Example Page</Text>
                </ScrollView>
            </SafeAreaView>
        ) 
    }

}

export default ExampleScreen;


