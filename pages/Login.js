import React, {Component} from 'react';
import {Input, CheckBox, Button} from 'react-native-elements';
import { View, Text } from 'react-native';

class Login extends Component {
    render = () =>{
        return(
            <View>
                <Input placeholder = "E-mail"/>
                <Input placeholder ="Password" />
                <Button 
                    title ="Giris Yap"
                    buttonStyle={{backgroundColor: "#00AEFF"}}
                    type = "solid"
                    />
                        <View style = {{flexDirection: "row"}}>
                        
                            <CheckBox 
                                left
                                title = "Beni Hatirla"
                                size = {15}
                            />
                            <Button 
                            type = "clear"
                            title = "Sifreni mi unuttun?"
                            />
                       

                </View>
                <Text style ={{fontSize: 12}}> Hesabin yok mu?</Text><Text style {{ fontSize: 12, color: '#FFFFFF'}}>  Kayit ol</Text>
            </View>
        )
    }


}

export default Login;