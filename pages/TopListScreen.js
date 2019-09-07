import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import List from '../components/List';
import TopListProfile from '../components/TopListProfile'

class TopListScreen extends Component {

    static navigationOptions = {
        headerTitle: "Top List Screen",
        
      };
    render = () => {
        return (
           
            <SafeAreaView  style ={styles.page}>
                <ScrollView>
                    <TopListProfile />
                    <List />
                </ScrollView>
            </SafeAreaView>
       
        ) 
    }

}
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#F4F4F4",
        flex:1,
    }
})
export default TopListScreen;


