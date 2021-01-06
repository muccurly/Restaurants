import {View,Text,StyleSheet} from 'react-native'
import React,{Component} from 'react'

export default class FavoritiesScreen extends Component{
    render(){
        const styles= StyleSheet.create({
            container:{
                flex:1,
                alignContent:'center',
                justifyContent:'center',
            }
        })
        return(
            <View style={styles.container}>
                <Text>Favorities</Text>
            </View>
        )
    }
}



