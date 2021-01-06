import {Icon } from 'react-native-elements';
import React from 'react';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';
const ButtonBack=({navigation})=>{
  return(
      <TouchableOpacity style={{width:50}} onPress={()=> navigation.goBack()}>
          <Icon  name={'arrow-left'} size={30}  color='red' type={"font-awesome-5"}/>   
      </TouchableOpacity>
  )
}
export default ButtonBack;