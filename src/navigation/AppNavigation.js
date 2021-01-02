import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {HomeStackScreen,CategoriesStackScreen,FavoritiesStackScreen} from './AppStackNavigation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createMaterialBottomTabNavigator();

const MyTabs=()=>{
    return(
        <NavigationContainer>
                <Tab.Navigator
                activeColor="red"
                barStyle={{backgroundColor:'#fff'}}
                >
                    <Tab.Screen name='Home'  component={HomeStackScreen}
                    options={{
                        tabBarIcon:({color})=>(
                            <MaterialCommunityIcons name="home" color={color} size={24} />
                        )
                    }}/>
                    <Tab.Screen name='Favorities' component={FavoritiesStackScreen}
                    options={{                
                        tabBarIcon:({color})=>(
                            <MaterialCommunityIcons name="heart" color={color} size={24}  />
                        )
                    }}/> 
                    <Tab.Screen name='Categories' component={ CategoriesStackScreen }
                    options={{
                        tabBarIcon:({color})=>(
                            <MaterialCommunityIcons name="checkbox-marked-circle" color={color} size={24}/>
                        )
                    }}/> 
                </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MyTabs;