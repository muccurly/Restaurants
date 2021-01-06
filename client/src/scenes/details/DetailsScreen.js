import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import {Avatar,Card,Image,Icon} from 'react-native-elements'
import DetailsHeader from '../../components/DetailsHeader'
import {Dimensions } from "react-native";
import Map from '../../components/Map'
import mainStyles from '../../styles/styles'
export default class DetailsScreen extends React.Component{
    render(){
        const width = Dimensions.get('window').width;
        const {restaurant} = this.props.route.params;
        return(
        <ScrollView tyle={styles.container}>
           <DetailsHeader navigation={this.props.navigation} img={restaurant.photograph}/>
            <Text style={mainStyles.title}>
                {restaurant.name}
            </Text>
            <Text style={{fontSize:15,color:'grey',padding:10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Neque convallis a cras semper auctor neque vitae tempus. 
            </Text>
            <Text style={mainStyles.title}>
                Location
            </Text>
            <Map style={{height:250}} dishes={restaurant} />
        </ScrollView>
    )
    }
}
const styles = StyleSheet.create({
    headerContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        paddingVertical:30,
    },
})