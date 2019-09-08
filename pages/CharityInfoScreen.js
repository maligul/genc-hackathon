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
} from 'react-native-elements';

import CardWithAvatar from '../components/CardWithAvatar';
import Divider from '../components/Divider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
class CharityInfoScreen extends Component {

    static navigationOptions = {
        headerTitle: "Charity Detail Screen",
        
      };
      
    render = () => {
        return (
            <SafeAreaView style={styles.page}>
                <ScrollView style={styles.scroll}>
                   <CardWithAvatar
                      url = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnyUhIZt8GvU3rjye__ROoNE91gkBRHPvsgjtqZhEG177B67s"}
                   >
                   <View style={{marginTop:-25,flexDirection:"row"}}>
                        <Button type="outline" containerStyle={{width:100}} buttonStyle={{color:"#6E79EE",borderRadius:20}} title="Takip Et"/>
                        <View style={{flex:1}}/>
                        <Button type="outline" containerStyle={{width:100}} buttonStyle={{color:"#6E79EE",borderRadius:20}} title="Bağış Yap"/>
                   </View>
                   <View style={{height:10}}/>
                   <Text style={styles.name}>{name}</Text>
                   <Text style={styles.title}>Dernek Tanımı</Text>
                   <Text style={styles.description}>{description}</Text>
                   <Divider/>
                   <Text style={styles.title}>Kuruluş Yılı</Text>
                   <Text style={styles.description}>{yearOfEstablish}</Text>
                   <Divider/>
                   <Text style={styles.title}>Faaliyet Alanları</Text>
                   <Text style={styles.description}>{fieldsOfActivity}</Text>
                   <Divider/>
                   <Text style={styles.title}>Genel Sekreter / Genel Müdür</Text>
                   <Text style={styles.description}>{generalManager}</Text>
                   <Divider/>
                   <Text style={styles.title}>İletişim Bilgileri</Text>
                   <View style={{paddingLeft:20}}>
                        <View style={{display:"flex" ,flexDirection:"row"}}>
                                    <Icon name="map-marker-outline" size={30} color="#282D73"/><Text style={{color:"#898A8F"}} lineBreakMode="tail">{address}</Text>
                        </View> 
                        <View style={{display:"flex" ,flexDirection:"row"}}>
                                    <Icon name="phone" size={30} color="#282D73"/><Text style={{color:"#898A8F"}}>{phone}</Text>
                        </View>
                        <View style={{display:"flex" ,flexDirection:"row"}}>
                                    <Icon name="email" size={30} color="#282D73"/><Text style={{color:"#898A8F"}}>{email}</Text>
                        </View>
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
    name:{
        fontFamily:"bold",
        textAlign:"center"
    },
    title:{
        fontFamily:"semi",
        color:"#898A8F"
    },
    description:{
        paddingVertical:10
    },
    scroll:{
        paddingTop:20,
        paddingHorizontal:20
    }
});

const description = "Beyoğlu bölgesinde yaklaşık 3 seneyi aşkın süredir her akşam sokakta yaşayan, evsiz dostlarımıza gönüllüler desteği ile yemekdağıtımı yapıyoruz seni de aramızda görmek isteriz.";
const address="Cihangir Mahallesi, Başkurt Sk. No:14, 34433 Beyoğlu/İstanbul"
const phone = "(212) 243 36 61";
const email = "info@corbadatuzunolsun.org";
const name = "Çorbada Tuzun Olsun Derneği";
const yearOfEstablish = 2017;
const fieldsOfActivity = "Hukuk, İnsan Kaynakları";
const generalManager = "Ahmet Türker";

export default CharityInfoScreen;


