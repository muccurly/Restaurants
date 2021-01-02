import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Avatar,Header, Icon } from 'react-native-elements';

export default class CustomHeader extends Component{

    render(){
        const {title,isHome=false,isMenu=false,navigation} = this.props;
        return(
            <Header
            backgroundColor="#fff" 
            leftComponent={
            !isMenu && !isHome?
            <Icon name={'arrow-left'} color='red' type={"font-awesome-5"}
            onPress={()=> navigation.goBack()}
            />
            :
            isHome?
            <Avatar
            size="small"
                rounded
                containerStyle={{backgroundColor:'grey'}}
                source={{
                    uri:"https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg"
                }}       
                />
            :
            null
            }           
            centerComponent={{text:title, style:{fontSize:25}}} 
            rightComponent={isHome? {onPress:(()=> navigation.navigate('Map')), icon:'map',color:'red',size:30}:null}
            />

        )
    }
}
