import React from 'react';
import Slider from './components/Slider';

import {Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

const images=[
'https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
'https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
'https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
'https://images.pexels.com/photos/3737687/pexels-photo-3737687.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
'https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
]

export default class App extends Component
{

  render(){
    return(
      <View style={style.container}>
      <Text style={style.texts}>Slider</Text>
      <Slider images={images}/>
     </View>
      );
    }
}

const style=StyleSheet.create({
  container:
  {
    margin:'50px',
    marginTop:'10px',
    overflow: 'hidden'
  },
  texts:
  {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: '50px'
  }
})