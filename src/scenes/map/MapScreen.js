import {View,Text,StyleSheet} from 'react-native'
import React,{Component} from 'react'
import Map from '../../components/Map'
import CustomHeader from '../../components/CustomHeader'

export default class MapScreen extends Component{
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
                <CustomHeader title={'Map'} navigation ={this.props.navigation}/>
                <View style={styles.container}>
                <Map/>
                </View>
            </View>
        )
    }
}



