import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    FlatList
} from 'react-native'; 
import { isTerminatorless } from '@babel/types';
const listData= [
    
    {
        name: 'Burakhan',
        points: '250',
      
    },
    {
        name: 'Ahmet',
        points: '150',
       
    },
    {
        name: 'Mali',
        points: '100',
       
    },
];
class List extends Component{
    render = () => {
      return(
        <SafeAreaView>
            <ScrollView>
            <FlatList
                data={
                    listData
                }
                renderItem={({item}) => <Text>{item.name} {item.points}</Text>}
/>
            </ScrollView>
        </SafeAreaView>
      )
        
         
    }

}

export default List;