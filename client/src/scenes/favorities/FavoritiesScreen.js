import {View,Text,StyleSheet,Button,Keyboard} from 'react-native'
import React,{useState} from 'react'
import {SafeAreaView,useSafeAreaInsets } from 'react-native-safe-area-context';
import {SearchBar} from '../../components/SearchBar/SearchBar'
import Menu from '../../components/Menu';
import {RESTAURANTS} from '../../shared/restaurants'
export default function FavoritiesScreen({navigation}){
        const insets = useSafeAreaInsets();
        const [state,setData] = useState({data:RESTAURANTS,searchTxt:''})
    
        const onSearchChange =(e)=>{
            setData({data:state.data,searchTxt:e})
        }
       const search=(text)=>{
           if(text.length===0){
               return state.data
           }
         
         return state.data.filter((p)=> {
             console.log(p.name.toUpperCase());
            return p.name.toUpperCase().indexOf(text.toUpperCase())>1;
         })
        }
        
        React.useLayoutEffect(()=>{
            navigation.setOptions({
            header:(props)=>(
            <SafeAreaView
                style={{
                  flexDirection:'row',
                  justifyContent:'space-around',
                  alignItems:'center',
                  paddingHorizontal:10,
                }}
              >
                <SearchBar onChange={(text)=> onSearchChange(text)} />
            </SafeAreaView>
                )
                  
            })
        },[navigation])
        const visibleData = search(state.searchTxt)
        return(
            <View style={styles.container}>
                <Menu  data={visibleData}/>
            </View>
        )
}
const styles= StyleSheet.create({
    container:{
        paddingTop:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    }
})


