import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { Marker } from 'react-native-maps'
import MapView from 'react-native-maps'
export default class Map extends Component{   
    render(){
        const {data,style} = this.props;
        console.log(data)
            return(
               <MapView 
               style={style!=null?style : StyleSheet.absoluteFillObject}
               loadingEnabled={true}
               region={{
                   latitude: 51.1605,
                   longitude: 71.4704,
                   latitudeDelta: 0.500,
                   longitudeDelta: 0.080,
                }}
                >
                {
                data.length>1?
                data.map((item,index)=>(
                    <Marker
                    key={index}
                    title={item.name}
                    coordinate={item.latlng}
                    description={item.address}
                    />
                ))
                :
                <Marker
                title={data.name}
                coordinate={data.latlng}
                description={data.address}
                />
            }    
               </MapView>
        )
    }
}