/**
 * @format
 */
import React from "react";
import {AppRegistry, Image} from 'react-native';
import {name as appName} from './app.json';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer } from 'react-navigation';
import MissionScreen from './pages/MissionScreen';
import ShopScreen from './pages/ShopScreen';
import ProfileScreen from './pages/ProfileScreen';
import TopListScreen from './pages/TopListScreen';
import MissionDetailScreen from './pages/MissionDetailScreen.js';
import CharityInfoScreen from './pages/CharityInfoScreen.js';
import WaitingScreen from './pages/WaitingScreen'

const navigationOptions = {
    headerStyle: {
        backgroundColor: '#6E77F6',
        shadowOpacity:0,
        elevation:0
    },
    headerTitleStyle:{  
        color:"white"
    }
};

const MissionStack = createStackNavigator({
    Home: {screen: MissionScreen},
    MissionDetail: {screen: MissionDetailScreen},
    CharityInfo : {screen: CharityInfoScreen}
  },{
    initialRouteName:"Home",
    defaultNavigationOptions:navigationOptions
  });

const ShopStack = createStackNavigator({
    Shop:{screen:ShopScreen}
},{
    initialRouteName:"Shop",
    defaultNavigationOptions:navigationOptions
});

const ProfileStack= createStackNavigator({
    Profile:{screen: ProfileScreen},
    Waiting:{screen: WaitingScreen}
},{
    initialRouteName:"Profile"
});  

const TopListStack= createStackNavigator({
    TopList:{screen: TopListScreen}
},{
    initialRouteName:"TopList",
    defaultNavigationOptions:navigationOptions
});  

const BottomNavigator = createBottomTabNavigator(
    {
        Mission: {
            screen: MissionStack,
            navigationOptions: {
                
                tabBarIcon: ({ tintColor }) => (
                  <Image source={require('./images/placeholder.png')}
                  style= {{width:28, height:28, tintColor:'white'}}>
                  </Image>
              )
          },

        },
        TopList: {
            screen: TopListStack,
            navigationOptions: {
                
                tabBarIcon: ({ tintColor }) => (
                  <Image source={require('./images/star.png')}
                  style= {{width:28, height:28, tintColor:'white'}}>
                  </Image>
              )
          },
        },
        Shop: {
            screen:ShopStack,
            navigationOptions: {
                
                tabBarIcon: ({ tintColor }) => (
                  <Image source={require('./images/bag.png')}
                  style= {{width:28, height:28, tintColor:'white'}}>
                  </Image>
              )
          },
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: {
                
                tabBarIcon: ({ tintColor }) => (
                  <Image source={require('./images/user.png')}
                  style= {{width:28, height:28, tintColor:'white'}}>
                  </Image>
              )
          },
        }, 
    },
    {
        initialRouteName: "Mission",
        tabBarOptions: {
            activeBackgroundColor: "#0A99FE",
            inactiveBackgroundColor: "#6E77F6",
            showLabel: false,
            
        }
    }
);

const AppContainer  = createAppContainer(BottomNavigator);

AppRegistry.registerComponent(appName, () => AppContainer);
    