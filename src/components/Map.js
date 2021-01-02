import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import MapView from 'react-native-maps'
export default class Map extends Component{   
    static navigationOptions = { header: null }
    render(){
            const styles= StyleSheet.create({
                container:{
                    flex:1,
                    alignContent:'center',
                    justifyContent:'center',
                },
            })
            return(
               <MapView 
               style={StyleSheet.absoluteFillObject}
               loadingEnabled={true}
               region={{
                   latitude: 37.78825,
                   longitude: -122.4324,
                   longitudeDelta:0.015
                }}
                >

               </MapView>
        )
    }
}