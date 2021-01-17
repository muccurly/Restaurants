import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import {
MapScreen,
HomeScreen,
FavoritiesScreen,
CategoriesScreen,
DetailsScreen,}from '../scenes';

const HomeStack = createStackNavigator(); 
const CategoriesStack= createStackNavigator(); 
const FavoritiesStack = createStackNavigator(); 

const HomeStackScreen = ()=>(
    <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={HomeScreen} options={{headerShown:false}} />        
        <HomeStack.Screen name='Map' component={MapScreen} options={{headerShown:false}} />
        <HomeStack.Screen name='RestaurantDetails' component={DetailsScreen} options={{headerShown:false}}/>
    </HomeStack.Navigator>
)
const CategoriesStackScreen = ()=>(
    <CategoriesStack.Navigator>
        <CategoriesStack.Screen name='Categories' component={CategoriesScreen} options={{headerShown:false}}/>
    </CategoriesStack.Navigator>
)
const FavoritiesStackScreen = ()=>(
    <FavoritiesStack.Navigator>
        <FavoritiesStack.Screen name='Favorities' component={FavoritiesScreen}/>
    </FavoritiesStack.Navigator>
)

export {HomeStackScreen,CategoriesStackScreen,FavoritiesStackScreen};