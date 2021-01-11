import {View,Text,StyleSheet} from 'react-native'
import React,{Component} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import RapiService from '../../services/rapi-services'
export default class CategoriesScreen extends Component{
    rapiService = new RapiService()
    componentDidMount(){
       this.GetData()
    }
    GetData=()=>{
      let data = []
    this.rapiService.getAllRestaurants().then(e=>data = e).then(()=> console.log(data))

    }
    render(){
        const styles= StyleSheet.create({
            container:{
                flex:1,
                alignContent:'center',
                justifyContent:'center',
            },
            botton:{
                width:200,height:200,backgroundColor:'red',
                alignItems:'center',
                justifyContent:'center',
            }
        })
        return(
                <TouchableOpacity style={styles.botton} onPress={()=>this.GetData()}>
                    <View >
                        <Text>Categories</Text>
                    </View>
                </TouchableOpacity>
        )
    }
}


