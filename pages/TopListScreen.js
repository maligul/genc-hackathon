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
import Badge from '../components/Badge';
import ButtonBar from '../components/ButtonBar'

class TopListScreen extends Component {

    static navigationOptions = {
        headerTitle: "Top List Screen",
        
      };
    render = () => {
        return (
           
            <SafeAreaView  style ={styles.page}>
            <Badge/>
                <ScrollView style={styles.scroll}>
                    <TopListProfile/>
                    <ButtonBar />
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
    },
    scroll:{
        paddingHorizontal:20
    }
})
export default TopListScreen;


