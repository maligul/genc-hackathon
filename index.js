/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer } from 'react-navigation';
import MissionScreen from './pages/MissionScreen';
import ShopScreen from './pages/ShopScreen';
import ProfileScreen from './pages/ProfileScreen';
import TopListScreen from './pages/TopListScreen';

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
    Home: {screen: MissionScreen}
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
    Profile:{screen: ProfileScreen}
},{
    initialRouteName:"Profile"
});  

const TopListStack= createStackNavigator({
    TopList:{screen: TopListScreen}
},{
    initialRouteName:"TopList"
});  

const BottomNavigator = createBottomTabNavigator(
    {
        Mission: {screen: MissionStack},
        Profile: {screen: ProfileStack},
        Shop: {screen:ShopStack},
        TopList: {screen: TopListStack} 
    },
    {
        initialRouteName: "Mission"
    }
);

const AppContainer  = createAppContainer(BottomNavigator);

AppRegistry.registerComponent(appName, () => AppContainer);
    