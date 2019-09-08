import React, {Component} from 'react';
import {
  
} from 'react-native';
import 
    {ButtonGroup}
 from 'react-native-elements'

class ButtonBar extends Component {
    constructor () {
        super()
        this.state = {
          selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
      }
      
      updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }
     render = () => {
        const buttons = ['Il', 'Ilce', 'Genel']
        const { selectedIndex } = this.state
      
  
        return (
            <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 50, marginBottom:15, borderRadius:8, marginLeft:-1, marginRight:-1}}
            
            textStyle={{fontFamily: 'bold'}}
            
    />  
            
            
        )
    }

}

export default ButtonBar;
