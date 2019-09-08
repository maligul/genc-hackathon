import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    
} from 'react-native';

import { Slider ,Button} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
class Filter extends React.Component{

    state = {
        point:500,
        weeks: 1
    }

    render = () => {
        return (
            <View>
                <View style={styles.placeHolder}/>
            <View style={styles.card}>
                <Text style={styles.title}>Görev Puanı Aralığı</Text>
                <Slider
                    minimumValue={0}
                    maximumValue={1000}
                    value={this.state.point}
                    onValueChange={value => this.setState({point:value})}
                />
            </View>
            <View style={styles.placeHolder}/>
            <View style={styles.card}>
                <Text style={styles.title}>İl Seç</Text>
                <RNPickerSelect
                    style={{
                        inputAndroid:{
                            backgroundColor:"white",
                            borderRadius:8
                        }
                    }}
                    placeholder = {{label:"Tüm Vakıflar"}}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                    ]}
                />  
                <View style={{height:10}}/>
            </View>
            <View style={styles.placeHolder}/>
            <View style={styles.card}>
                <Text style={styles.title}>Vakıf Seç</Text>
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
            </View>
            <View style={styles.placeHolder}/>
            <View style={styles.card}>
                <Text style={styles.title}>Tarih Aralığı</Text>
                <Slider
                    minimumValue={1}
                    maximumValue={6}
                    value={this.state.weeks}
                    onValueChange={value => this.setState({weeks:value})}
                />
            </View>
            <View style={styles.placeHolder}/>
            <View style={styles.card}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Button title={"Uygula"} containerStyle={{flex:1}} buttonStyle={{backgroundColor:"#6E77F6",borderRadius:40}}  onPress={this.props.onClose}/>
                    <Icon name="close-circle"  color="#6E77F6" size={50} borderRadius={30} onPress={this.props.onClose} />
                </View>
            </View>
            

        </View>
        )
    }

}

const styles = StyleSheet.create({
    title:{
        fontFamily:"semi"
    },
    card:{
        padding:20,
        borderRadius:20,
        backgroundColor:"white"
    },
    placeHolder:{
        height:20
    }
});

export default Filter;