import React from 'react'
import {View,Text,StyleSheet,FlatList,ScrollView} from 'react-native'
import {Card} from 'react-native-elements'
import DetailsHeader from '../../components/DetailsHeader'
import {Dimensions } from "react-native";
import Map from '../../components/Map'
import mainStyles from '../../styles/styles'
export default class DetailsScreen extends React.Component{

    renderItem = ({item,index})=>{

        return(
            <Card containerStyle={{width:'45%'}}>
                <Card.Title>{item.name}</Card.Title>
                <Text>{item.date.split('-')}</Text>
                <Text>{item.comments}</Text>
            </Card>
        )
    }
    render(){
        const numColumns =  2;
        const {restaurant} = this.props.route.params;
        return(
        <ScrollView tyle={styles.container}>
           <DetailsHeader navigation={this.props.navigation} img={restaurant.photograph}/>
            <Text style={mainStyles.title}>
                {restaurant.name}
            </Text>
            <Text style={{fontSize:15,color:'grey',padding:10}}>
            {restaurant.description}
            </Text>
            <Text style={mainStyles.title}>
                Location
            </Text>
            <Map style={{height:250}} data={restaurant} />
            <Text style={mainStyles.title}>
                Reviews:
            </Text>
            <FlatList 
                data={restaurant.reviews}
                renderItem={this.renderItem}
                numColumns={numColumns}
            />
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