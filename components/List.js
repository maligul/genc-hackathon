import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    FlatList,
    StyleSheet,
    View
} from 'react-native'; 
 import {
     ListItem,
    }from 'react-native-elements';

class List extends Component{
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item , index}) => (
         <ListItem
            title={item.name}
            leftElement={(<View style ={styles.roundView}><Text>{index + 1}</Text></View>)}
            leftAvatar={{ source: { uri: item.avatar_url } }}
            rightTitle={item.points}
            rightTitleStyle={{fontFamily: "bold", color:"black"}}
            
            />
)
    
    render = () => {
      return(
        
             <View  style={{
                 backgroundColor:"white",
                 paddingVertical:20,
                 borderRadius:20
             }}>
                <FlatList
                     
                     keyExtractor={this.keyExtractor}
                     data={listData}
                     renderItem={this.renderItem}
                />
             </View>
      )
        
         
    }
}
const styles = StyleSheet.create({
    roundView: {
        borderColor: "black",
        width:40,
        height: 40,
        borderRadius: 40,
        borderWidth: 1,
        alignItems:"center",
        justifyContent: "center"
    },
    rounderList:{
        borderRadius: 50,
    }
});


const listData= [    
    {
        name: 'Burakhan',
        points: '250 puan',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        
    },
    {
        name: 'Ahmet',
        points: '150 puan',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        
    },
    {
        name: 'Mali',
        points: '100 puan',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        
    },
    {
        name: 'Burakhan',
        points: '250 puan',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        
    },
    {
        name: 'Ahmet',
        points: '150 puan',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        
    },
    {
        name: 'Mali',
        points: '100 puan',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        
    },
    {
        name: 'Burakhan',
        points: '250 puan',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        
    },
    {
        name: 'Ahmet',
        points: '150 puan',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        
    },
    {
        name: 'Mali',
        points: '100 puan',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        
    },
    {
        name: 'Burakhan',
        points: '250 puan',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        
    },
    {
        name: 'Ahmet',
        points: '150 puan',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        
    },
    {
        name: 'Mali',
        points: '100 puan',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        
    }
];

export default List;