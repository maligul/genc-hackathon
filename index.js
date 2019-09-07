/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer } from 'react-navigation';
import MissionScreen from './pages/MissionScreen';
import ExampleScreen from './pages/ExampleScreen';
import ProfileScreen from './pages/ProfileScreen';

const MissionStack = createStackNavigator({
    Home: {screen: MissionScreen},
    Example: {screen: ExampleScreen},
  },{
    initialRouteName:"Home",
  });

const ProfileStack= createStackNavigator({
    Profile:{screen: ProfileScreen}
},{
    initialRouteName:"Profile"
});  

const BottomNavigator = createBottomTabNavigator(
    {
        Mission: {screen: MissionStack},
        Profile: {screen: ProfileStack}
    },
    {
        initialRouteName: "Mission"
    }
);

const AppContainer  = createAppContainer(BottomNavigator);

AppRegistry.registerComponent(appName, () => AppContainer);
    