import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {Avatar,Card,Image,Icon} from 'react-native-elements'
import ButtonBack from '../../components/ButtonBack'
export default class DetailsScreen extends React.Component{
    render(){
        const {restaurant} = this.props.route.params;
        return(
        <View tyle={styles.container}>
            <Image source={restaurant.photograph}
            style={styles.headerImg}
            >
                <View style={styles.headerContainer}>
                 <ButtonBack navigation={this.props.navigation}/>
                    <View style={{flexDirection:'row', alignContent:'flex-start'}}>
                    <Icon raised size={20} name="edit" color='red' type="font-awesome-5"  />
                    <Icon raised size={20} name="heart" color='red' type="font-awesome-5" />
                    </View>
                </View>               

            </Image>
            <Text>
                {restaurant.name}
            </Text>
        </View>
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
    headerImg:{
        height:300,
    }
})