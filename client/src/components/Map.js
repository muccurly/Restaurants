import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { Marker } from 'react-native-maps'
import MapView from 'react-native-maps'
export default class Map extends Component{   
    render(){
        const {dishes,style} = this.props;
            return(
               <MapView 
               style={style!=null?style : StyleSheet.absoluteFillObject}
               loadingEnabled={true}
               region={{
                   latitude: 37.78825,
                   longitude: -122.4324,
                }}
                >
                {
                dishes.lenght>1?
                dishes.map((item,index)=>(
                    <Marker
                    key={index}
                    title={item.name}
                    coordinate={item.latlng}
                    description={item.address}
                    />
                ))
                :
                <Marker
                title={dishes.name}
                coordinate={dishes.latlng}
                description={dishes.address}
                />
            }    
               </MapView>
        )
    }
}