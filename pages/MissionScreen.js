import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    Button
} from 'react-native'; 

class MissionScreen extends Component {
    static navigationOptions = {
        headerTitle: "Mission Screen",
        
      };
    render = () => {
        const {navigation} = this.props;
        return (
            <SafeAreaView>
                <ScrollView>
                    <Text>Mission Page</Text>
                    <Button
                        onPress = {()=> navigation.navigate('Example')}
                        title = {"Go To Example"}
                    />          
                </ScrollView>
            </SafeAreaView>
        ) 
    }

}

export default MissionScreen;


