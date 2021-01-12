import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {Image,Icon} from 'react-native-elements'
import ButtonBack from './ButtonBack'
export default function DetailsHeader(props){
        const {img} = props;
        return(
            <Image source={{uri:img}}
              style={styles.headerImg}
            >
                <View style={styles.headerContainer}>
                 <ButtonBack navigation={props.navigation}/>
                    <View style={{flexDirection:'row', alignContent:'flex-start'}}>
                    <Icon raised size={20} name="edit" color='red' type="font-awesome-5"  />
                    <Icon raised size={20} name="heart" color='red' type="font-awesome-5" />
                    </View>
                </View>            
            </Image>
    )
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
        marginBottom:20
    }
})