import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    Button,
    StyleSheet
} from 'react-native'; 

import CardWithAvatar from '../components/CardWithAvatar';

class MissionScreen extends Component {
    static navigationOptions = {
        headerTitle: "Mission Screen",
        
      };
    render = () => {
        const {navigation} = this.props;
        return (
            <SafeAreaView style={styles.page}>
                <ScrollView>
                    <Text>Mission Page</Text>
                    <CardWithAvatar
                        url={'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}
                    >
                        <Text>asd</Text>
                    </CardWithAvatar>
                             
                </ScrollView>
            </SafeAreaView>
        ) 
    }

}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#F4F4F4"
    } 
});

export default MissionScreen;


