import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    FlatList
} from 'react-native'; 
 import {
     ListItem
    }from 'react-native-elements';
const listData= [    
    {
        name: 'Burakhan',
        points: '250',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    },
    {
        name: 'Ahmet',
        points: '150',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    },
    {
        name: 'Mali',
        points: '100',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
       
    },
];
class List extends Component{
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
         <ListItem
            title={item.name}
            
            leftAvatar={{ source: { uri: item.avatar_url } }}
            bottomDivider
            rightTitle={item.points}
            chevron
            />
)
    
    render = () => {
      return(
        <SafeAreaView>
            <ScrollView>
            <FlatList
                keyExtractor={this.keyExtractor}
                data={listData}
                renderItem={this.renderItem}
            />
            </ScrollView>
        </SafeAreaView>
      )
        
         
    }

}

export default List;