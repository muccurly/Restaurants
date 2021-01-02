import React from 'react'
import {View,FlatList,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {ListItem,Avatar,Card} from 'react-native-elements'


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
            padding:3
        },
        card:{
            width:'45%',
            flex:1,
            marginTop:10,
            marginBottom:25,
            marginHorizontal:5,
        }
        

    })
    const renderMenuItem = ({item,index})=>{
        return(
       <TouchableOpacity key={index} style={styles.card} >
        <View >
            <Card.Image  source={{uri:'http://placeimg.com/80/80'}}/>
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
                data ={props.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item=> item.id.toString()}
                numColumns={numColumns}
                ListHeaderComponent={getHeader}
                />
        </View>
    );
}

export default Menu;