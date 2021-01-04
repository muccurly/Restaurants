import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {Avatar,Card,Image} from 'react-native-elements'
export default class DetailsScreen extends React.Component{

    render(){
        const {restaurant} = this.props.route.params;
        return(
        <View>
            <Text>
                {restaurant.name}
            </Text>
        </View>
    )
    }
}