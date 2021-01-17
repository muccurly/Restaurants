import React from 'react'
import {View,FlatList,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {ListItem,Avatar,Card} from 'react-native-elements'
import { ActivityIndicator } from 'react-native';

function Menu(props){
    const numColumns =  2
    const styles = StyleSheet.create({
        title:{
            marginLeft:10,
            fontSize:35,            
            color:'#4d4a45',
        },
        titleCard:{
            fontSize:18,
            marginTop:10,
        },
        textCard:{
            fontSize:15,
            color:'grey'
        },
        container:{
            width:'100%'
        },
        card:{
            width:'45%',
            flex:1,
            marginTop:10,
            height:310,
            marginHorizontal:5,
        }
        

    })
    const renderMenuItem = ({item,index})=>{
        return(
       <TouchableOpacity onPress={()=>console.log()} key={index} style={styles.card} >
        <View >
            <Card.Image PlaceholderContent={<ActivityIndicator/>}  source={item.photograph}/>
            <Card.Title style={styles.titleCard}>{item.name}</Card.Title>
                <Text style={styles.textCard} >
                  {item.address}  
                </Text>
        </View>
       </TouchableOpacity>     
        );
    }
    const getHeader=()=>{
        return  <Text style={styles.title}>Restaurants</Text>
    }
    return(
        <View style={styles.container}>
            <FlatList
                data ={props.data}
                renderItem={renderMenuItem}
                keyExtractor={item=> item.id.toString()}
                numColumns={numColumns}
                ListHeaderComponent={getHeader}
                />
        </View>
    );
}

export default Menu;