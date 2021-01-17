import React,{useState,useRef} from 'react'
import {TextInput,StyleSheet, View, Button, Keyboard,Animated,Dimensions} from 'react-native'
import {styles} from './styles'

export const SearchBar=(props)=>{
  const [state,setValueSearch] = useState({valueSearch:'',isTyping:false});
  const animation = useRef(new Animated.Value(0)).current
  const {width} = Dimensions.get('window');
  
   const onSearchChange=(e)=>{
       console.log(e)
        setValueSearch(e);
        props.onChange(e);
    }
    const onPress =(e)=>{
        setValueSearch({valueSearch:state.valueSearch,isTyping:true})
        Animated.spring(animation,{
            toValue: width *0.2,
            useNativeDriver: false,
        }).start()
    }

    return(
        <View style={{flexDirection:'row'}} >
            <TextInput placeholderTextColor='white' placeholder='Enter name of restaurant'
                style={state.isTyping? styles.searchHeaderOnPress:styles.searchHeader}
                value={state.valueSearch}
                onChangeText={onSearchChange}
                onFocus={onPress}
            />
            {state.isTyping?(
                  <Button            
                  title='Cancel'
                  color='red'w
                  onPress={()=> {state.isTyping=false; Keyboard.dismiss()} }
                />
            ):null}
            
           
        </View>
    )
}
