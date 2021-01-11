import React,{Component} from 'react'
import Menu from '../../components/Menu';
import {RESTAURANTS} from '../../shared/restaurants';
import {ScrollView, View} from 'react-native'
import CustomHeader from '../../components/CustomHeader'
import RapiService from '../../services/rapi-services'
export default class Main extends Component{
    rapiService = new RapiService()
    constructor(props){
        super(props);
        this.state={
            restaurants:[],
            selectedDish: null
        }
    }
    componentDidMount(){
        this.GetData()
     }
     GetData=()=>{
       let data = []
     this.rapiService.getAllRestaurants().then(e=>data = e).then(()=> this.LoadRestaurants(data)) 
     }
     LoadRestaurants=(data)=>{
         this.setState({
             restaurants:data
         });
     };
    onDishSelect(dishId){
        this.setState({selectedDish: dishId})
        const id = RESTAURANTS.findIndex((item)=>item.id=== dishId)
        console.log(id);
         const restaurant = RESTAURANTS[id];
         console.log(restaurant)
         this.props.navigation.navigate('RestaurantDetails',{restaurant})
    }
    render(){ 
        return(
            <View>
            <CustomHeader isHome={true}  title={'Home'} navigation ={this.props.navigation}/>
                <ScrollView style={{backgroundColor:'white',padding:5,width:"100%"}}>
                    <Menu data= {this.state.restaurants} onPress={(dishId) =>this.onDishSelect(dishId)} />
                </ScrollView>
            </View>
            
        )
    }
}