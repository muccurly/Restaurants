import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { Marker } from 'react-native-maps'
import MapView from 'react-native-maps'
export default class Map extends Component{   
    render(){
        const {data,style} = this.props;
        
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
                data.lenght>1?
                data.map((item,index)=>(
                    console.log(item),
                    <Marker
                    key={index}
                    title={item.name}
                    coordinate={item.latlng}
                    description={item.address}
                    />
                ))
                :
                console.log(data.latlng),
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