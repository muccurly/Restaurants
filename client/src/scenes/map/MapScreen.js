import {View,Text,StyleSheet} from 'react-native'
import React,{Component} from 'react'
import Map from '../../components/Map'
import CustomHeader from '../../components/CustomHeader'
import {RESTAURANTS} from '../../shared/restaurants'
import RapiService from '../../services/rapi-services'
export default class MapScreen extends Component{
    rapiService = new RapiService()
    constructor(props){
        super(props)
        this.state={
            restaurants:props.route.params.data,
        }   
    }
    componentDidMount(){
        this.getData()
    }
    getData=()=>{
        
    }
    LoadRestaurants=(data)=>{
        this.setState({
            restaurants:data
        })
    }
    render(){
        const styles= StyleSheet.create({
            container:{
                flex:1,
                alignContent:'center',
                justifyContent:'center',
            }
        })
        // console.log(this.state.restaurants)
        return(
            <View style={styles.container}>
                <CustomHeader title={'Map View'} navigation ={this.props.navigation}/>
                <View style={styles.container}>
                <Map data={this.state.restaurants}  />
                </View>
            </View>
        )
    }
}



