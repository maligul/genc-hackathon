import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    
} from 'react-native';
import{
    ListItem,
    Button
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

class WaitingMissions extends Component {
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            subtitle={item.tanim}
            leftAvatar={{ source: { uri: item.avatar_url } }}
            contentContainerStyle ={{alignItems:'center', justifyContent: 'center'}}
            rightElement = {<View><Text style = {{fontFamily: "bold", color:"black"}}>100 puan</Text><Button
            type = 'outline'
            title ='ayrintili bilgi'
            style = {{borderColor: '#C322E6', borderRadius: 3 , borderWidth:2,height:20}}
            titleStyle ={{color: '#C322E6', fontSize:11 }}
            /></View>}
      
  />
)
    render = () => {
        return(
           
            <FlatList
             keyExtractor={this.keyExtractor}
             data={MissionList}
             renderItem={this.renderItem}
          />
             
        )
      }

}

const MissionList =[
    {
        vakif: 'Corbada Tuzun Olsun',
        tanim: 'Evsizlere yemek dagitma',
        missionPoint: '50 Puan',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    },
    {
        vakif: 'Corbada Tuzun Olsun',
        tanim: 'Evsizlere yemek dagitma',
        missionPoint: '50 Puan',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    },
    {
        vakif: 'Corbada Tuzun Olsun',
        tanim: 'Evsizlere yemek dagitma',
        missionPoint: '50 Puan',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    },
    {
        vakif: 'Corbada Tuzun Olsun',
        tanim: 'Evsizlere yemek dagitma',
        missionPoint: '50 Puan',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    },
    {
        vakif: 'Corbada Tuzun Olsun',
        tanim: 'Evsizlere yemek dagitma',
        missionPoint: '50 Puan',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    },
]


export default WaitingMissions;