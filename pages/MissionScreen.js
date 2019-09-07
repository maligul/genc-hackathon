import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    Button,
    StyleSheet,
    FlatList,
    View,
    Image
} from 'react-native'; 

import CardWithAvatar from '../components/CardWithAvatar';
import MissionCard from '../components/MissionCard';
import Logo from '../assets/images/logo.png';

class MissionScreen extends Component {
    static navigationOptions = {
        headerTitle: ()=><View style={{alignItems:"center",flex:1,paddingTop:20}}><Image source={Logo} style={{width: 80, height: 80}}/></View> 
      };
    render = () => {
        const {navigation} = this.props;
        return (
            <SafeAreaView style={styles.page}>
                <View style={{backgroundColor:"#6E77F6",height:20,borderBottomRightRadius:20,borderBottomLeftRadius:20}}/>
                <ScrollView style={styles.scroll}>
                    <Text style={styles.title}>Yakınındaki Görevler</Text>

                    <FlatList
                        ItemSeparatorComponent={()=> <View style={{width:10}}/> }
                        horizontal
                        data={data}
                        renderItem={({item}) =>
                            <MissionCard
                                photoUrl={item.photoUrl}
                                charityName={item.charityName}
                                description={item.description}
                                point={item.point}
                                width={175}
                            />
                        }
                    />

                         
                    <Text style={styles.title}>Tüm  Görevler</Text>

                    <FlatList
                        numColumns={2}
                        data={data}
                        ItemSeparatorComponent={()=><View style={{height:20}}/>}
                        renderItem={({item}) =>
                            <View style={{alignItems:"center",flex:1}}>
                            <MissionCard
                                style={{flex:1}}
                                photoUrl={item.photoUrl}
                                charityName={item.charityName}
                                description={item.description}
                                point={item.point}
                                width={175}
                            />
                            </View>
                        }
                    />

                </ScrollView>
            </SafeAreaView>
        ) 
    }

}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#F4F4F4",
        
    },
    scroll:{
        paddingHorizontal:10,
    },
    title:{
        marginVertical:10,
        fontFamily:"regular",
        color:"#B1B1B3"
    }
});

const data = [
    {
        charityName:"Çorbada Tuzun Olsun Derneği",
        photoUrl :"https://pbs.twimg.com/profile_images/831410421374603264/dz08xymo_400x400.jpg",
        point :50,
        description: "Refakat etme görevi",
    },
    {
        charityName :"Tema Vakfı",
        photoUrl :"http://www.tema.org.tr/folders/14966/categorial1images/2191/picture_first_k.jpg",
        point :30,
        description : "Fidan Dikme görevi",
    },
    {
        charityName : "ASHOKA Türkiye",
        photoUrl : "https://yt3.ggpht.com/a/AGF-l79K3vIJx0Q7gL3hzwf0oUrXyg-I898vOybFuQ=s900-c-k-c0xffffffff-no-rj-mo",
        point : 50,
        description : "Saha Gönüllüsü",
    },
    {
        charityName:"Çorbada Tuzun Olsun Derneği",
        photoUrl :"https://pbs.twimg.com/profile_images/831410421374603264/dz08xymo_400x400.jpg",
        point :50,
        description: "Refakat etme görevi",
    },
    {
        charityName :"Tema Vakfı",
        photoUrl :"http://www.tema.org.tr/folders/14966/categorial1images/2191/picture_first_k.jpg",
        point :30,
        description : "Fidan Dikme görevi",
    },
    {
        charityName : "ASHOKA Türkiye",
        photoUrl : "https://yt3.ggpht.com/a/AGF-l79K3vIJx0Q7gL3hzwf0oUrXyg-I898vOybFuQ=s900-c-k-c0xffffffff-no-rj-mo",
        point : 50,
        description : "Saha Gönüllüsü",
    },
    {
        charityName:"Çorbada Tuzun Olsun Derneği",
        photoUrl :"https://pbs.twimg.com/profile_images/831410421374603264/dz08xymo_400x400.jpg",
        point :50,
        description: "Refakat etme görevi",
    },
    {
        charityName :"Tema Vakfı",
        photoUrl :"http://www.tema.org.tr/folders/14966/categorial1images/2191/picture_first_k.jpg",
        point :30,
        description : "Fidan Dikme görevi",
    },
    {
        charityName : "ASHOKA Türkiye",
        photoUrl : "https://yt3.ggpht.com/a/AGF-l79K3vIJx0Q7gL3hzwf0oUrXyg-I898vOybFuQ=s900-c-k-c0xffffffff-no-rj-mo",
        point : 50,
        description : "Saha Gönüllüsü",
    },
    {
        charityName:"Çorbada Tuzun Olsun Derneği",
        photoUrl :"https://pbs.twimg.com/profile_images/831410421374603264/dz08xymo_400x400.jpg",
        point :50,
        description: "Refakat etme görevi",
    },
    {
        charityName :"Tema Vakfı",
        photoUrl :"http://www.tema.org.tr/folders/14966/categorial1images/2191/picture_first_k.jpg",
        point :30,
        description : "Fidan Dikme görevi",
    },
    {
        charityName : "ASHOKA Türkiye",
        photoUrl : "https://yt3.ggpht.com/a/AGF-l79K3vIJx0Q7gL3hzwf0oUrXyg-I898vOybFuQ=s900-c-k-c0xffffffff-no-rj-mo",
        point : 50,
        description : "Saha Gönüllüsü",
    }

];

export default MissionScreen;


