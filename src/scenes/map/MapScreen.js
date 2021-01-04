import {View,Text,StyleSheet} from 'react-native'
import React,{Component} from 'react'
import Map from '../../components/Map'
import CustomHeader from '../../components/CustomHeader'
import {RESTAURANTS} from '../../shared/restaurants'

export default class MapScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            dishes : RESTAURANTS,
        }   
    }
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
                <CustomHeader title={'Map View'} navigation ={this.props.navigation}/>
                <View style={styles.container}>
                <Map dishes={this.state.dishes}  />
                </View>
            </View>
        )
    }
}



