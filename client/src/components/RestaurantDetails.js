import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {Avatar,Card} from 'react-native-elements'

const RestaurantDetails=(props)=>{
    const {id}= props;
    return(
        <View>
            <Text>
                {id}
            </Text>
        </View>
    )
}
export default RestaurantDetails;