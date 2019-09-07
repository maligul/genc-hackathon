import React,{Component} from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    FlatList
} from 'react-native';

import {
    Button
} from 'react-native-elements';

import RNPickerSelect from 'react-native-picker-select';
import Badge from '../components/Badge';
import ShopItemCard from '../components/ShopItemCard';

class ShopScreen extends Component {
    static navigationOptions = {
        headerTitle: "Hediyeler",
        
      };

    render = () => {
        return (
            <SafeAreaView style={styles.page}>
            <Badge/>
                <ScrollView style={styles.scroll}>
                <View style={{height:10}}/>
                <RNPickerSelect
                    style={{
                        inputAndroid:{
                            backgroundColor:"white",
                            borderRadius:8
                        }
                    }}
                    placeholder = {{label:"Tüm İller"}}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                    ]}
                />  
                <View style={{height:10}}/>
                <RNPickerSelect
                    style={{
                        inputAndroid:{
                            backgroundColor:"white",
                            borderRadius:8
                        }
                    }}
                    placeholder = {{label:"Tüm İlçeler"}}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                    ]}
                />  
                <View style={{height:10}}/>
                <RNPickerSelect
                    style={{
                        inputAndroid:{
                            backgroundColor:"white",
                            borderRadius:8
                        }
                    }}
                    placeholder = {{label:"Tüm Hediye Tipleri"}}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                    ]}
                />  

                <View
                    style={{
                        alignItems:"center"
                    }}
                >
                    <Button 
                        containerStyle={{
                            marginVertical:10,
                            width:150
                        }}
                        buttonStyle={{
                            backgroundColor:"#6E79EE",
                            borderRadius:20,
                        }}
                        title={"Uygula"}
                    />

                </View>
                <FlatList
                    ItemSeparatorComponent={()=> <View style={{height:10}}/> }
                    data={data}
                    renderItem={({item}) =>
                            <ShopItemCard
                                description={item.description}
                                point={item.point}
                            />
                    }
                />
                </ScrollView>
                
                
            </SafeAreaView>
        ) 
    }



}

const styles =  StyleSheet.create({
    page: {
        backgroundColor: "#F4F4F4",
        flex:1
    },
    scroll:{
        paddingHorizontal: 40
    }
});


const data =[
    {
       description: "Hasan Usta Kebap - Kadıköy Şubesi \n 1 Adana 1 İçecek",
       point:120
    },
    {
        description: "Sockstation - sockstation.com - 5 çift çorap",
        point:120
    },
    {
        description: "Cinema Pink - Safir AVM - 1 adet sinema bileti",
        point:120
    },
    {
        description: "Hasan Usta Kebap - Kadıköy Şubesi \n 1 Adana 1 İçecek",
        point:120
     },
     {
         description: "Sockstation - sockstation.com - 5 çift çorap",
         point:120
     },
     {
         description: "Cinema Pink - Safir AVM - 1 adet sinema bileti",
         point:120
     },
     {
        description: "Hasan Usta Kebap - Kadıköy Şubesi \n 1 Adana 1 İçecek",
        point:120
     },
     {
         description: "Sockstation - sockstation.com - 5 çift çorap",
         point:120
     },
     {
         description: "Cinema Pink - Safir AVM - 1 adet sinema bileti",
         point:120
     }
];

export default ShopScreen;


