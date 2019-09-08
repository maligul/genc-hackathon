import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View
} from 'react-native';

import {
    Button
} from 'react-native-elements'
import MapView from 'react-native-maps';
import CardWithAvatar from '../components/CardWithAvatar';
import Divider from '../components/Divider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
class MissionDetailScreen extends Component {

    static navigationOptions = {
        headerTitle: "Mission Detail Screen",
        
      };
      
    render = () => {
        return (
            <SafeAreaView style={styles.page}>
                <ScrollView style={styles.scroll}>
                   <CardWithAvatar
                      url = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnyUhIZt8GvU3rjye__ROoNE91gkBRHPvsgjtqZhEG177B67s"}
                      onPress = {()=>{this.props.navigation.navigate('CharityInfo')}}  
                   >
                   <Text style={styles.title}>Görev Tanımı</Text>
                   <Text style={styles.description}>{description}</Text>
                   <View style={{alignItems:"flex-end"}}>
                        <Button type="outline" containerStyle={{width:150}} buttonStyle={{color:"#6E79EE",borderRadius:20}} title="Görevi Al"/>
                   </View> 
                   <View style={{paddingHorizontal:20}}>
                        <Divider/>
                        <View style={{flexDirection:"row"}}>
                            <Text>19 Eylül</Text>
                            <View style={{flex:1}}/>
                            <Text>18.30</Text>
                        </View>
                        <Divider/>
                        <View style={{display:"flex" ,flexDirection:"row"}}>
                            <Icon name="map-marker-outline" size={30} color="#898A8F"/><Text style={{color:"#898A8F"}}>{address}</Text>
                        </View>
                        
                        <MapView
                            style={{height:150,marginVertical:20,borderRadius:20}}
                            initialRegion={{
                                latitude: 41.034102,
                                longitude: 28.9834093,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}  
                        />
                   </View>
                   
                   </CardWithAvatar>
                   
                   <View style={{height:75}}/>         
                </ScrollView>
            </SafeAreaView>
        ) 
    }

}

const styles = StyleSheet.create({
    page:{
        backgroundColor: "#F4F4F4",
        flex:1,
    },
    title:{
        fontFamily:"bold",
    },
    description:{
        paddingVertical:20
    },
    scroll:{
        paddingTop:20,
        paddingHorizontal:20
    }
});

const description = "Beyoğlu bölgesinde yaklaşık 3 seneyi aşkın süredir her akşam sokakta yaşayan, evsiz dostlarımıza gönüllüler desteği ile yemekdağıtımı yapıyoruz seni de aramızda görmek isteriz.";
const address="Cihangir Mahallesi, Başkurt Sk. No:14, 34433 Beyoğlu/İstanbul"
export default MissionDetailScreen;


