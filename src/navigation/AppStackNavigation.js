import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import {
HomeScreen,
FavoritiesScreen,
CategoriesScreen }from '../scenes'
import {Avatar,Header} from 'react-native-elements';
const HomeStack = createStackNavigator(); 
const CategoriesStack= createStackNavigator(); 
const FavoritiesStack = createStackNavigator(); 
const HomeStackScreen = ()=>(
    <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={HomeScreen} options={{
            header: ({navigation})=>
            <Header
            backgroundColor="#fff" 
            leftComponent={
            <Avatar
            size="medium"
                rounded
                containerStyle={{borderColor:'',backgroundColor:'grey'}}
                source={{
                    uri:"https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg"
                }}       
                />}           
            centerComponent={{text:"Home", style:{fontSize:25}}} 
            rightComponent={{icon:'map',color:'red',size:30}}            
            />
        }}/>
    </HomeStack.Navigator>
)
const CategoriesStackScreen = ()=>(
    <CategoriesStack.Navigator>
        <CategoriesStack.Screen name='Categories' component={CategoriesScreen} options={{
              header: ()=> <Header
              backgroundColor="#fff"
              centerComponent={{text:"Categories", style:{fontSize:25}}}          
              />
        }} />
    </CategoriesStack.Navigator>
)
const FavoritiesStackScreen = ()=>(
    <FavoritiesStack.Navigator>
        <FavoritiesStack.Screen name='Favorities' component={FavoritiesScreen} options={{
              header: ()=> <Header
              backgroundColor="#fff"
              centerComponent={{text:"Favorities", style:{fontSize:25}}}          
              />
        }} />
    </FavoritiesStack.Navigator>
)

export {HomeStackScreen,CategoriesStackScreen,FavoritiesStackScreen};