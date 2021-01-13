import React from 'react';
import {Component} from 'react';
import {Text,View,Image,ScrollView, Dimensions, StyleSheet} from 'react-native';

const {width}=Dimensions.get('window');
const height=width*0.3;

export default class Slider extends Component
{
  state={
  active:0
  }

  change=({nativeEvent})=>{
   const slide= Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
   if(slide!==this.state.active)
   {
    this.setState({active:slide});
   }
  }

  render(){
    return(
      <View style={style.container}>
      <ScrollView 
      pagingEnabled 
      horizontal 
      onScroll={this.change}
      showsHorizontalScrollIndicator={false}
      style={style.container}>
      {this.props.images.map((image, index) =>(
      <Image 
      key={index}
      source={{uri: image}}
      style={style.imagestyle}
      />
        ))
     }
     </ScrollView>
     <View style={style.pagination}>
     {
      this.props.images.map((i, k)=>(
      <Text key={k} style={k==this.state.active? style.pagingActiveText : style.pagingText}>⬤</Text>
      ))
     }
     </View>
     </View>
      );
    }
}

const style=StyleSheet.create({
  container:
  {
    marginTop:'5px',
    width:'700px',
    height,
    alignSelf:'center'
  },
  imagestyle:
  {
    width:'700px',
    height,
    resizeMode:'cover',
    flex:1,
    aspectRatio: 1,
  },
  pagination:
  {
    flexDirection:'row',
    position:'absolute',
    bottom:0,
    alignSelf:'center',
  },
  pagingText:
  {
    fontSize: (width/85), 
    color:'#888',
    margin:3
  },
  pagingActiveText:
  {
    fontSize: (width/85), 
    color:'#fff',
    margin:3
  },
})