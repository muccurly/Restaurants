import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { Marker } from 'react-native-maps'
import MapView from 'react-native-maps'
export default class Map extends Component{   
    render(){
        const {dishes} = this.props;
            return(
               <MapView 
               style={StyleSheet.absoluteFillObject}
               loadingEnabled={true}
               region={{
                   latitude: 37.78825,
                   longitude: -122.4324,
                }}
                >
                {dishes.map((item,index)=>(
                    <Marker
                    key={index}
                    title={item.name}
                    coordinate={item.latlng}
                    description={item.address}
                    />
                ))}    
               </MapView>
        )
    }
}