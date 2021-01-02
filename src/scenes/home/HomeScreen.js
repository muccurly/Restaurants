import React,{Component} from 'react'
import Menu from '../../components/Menu';
import {DISHES} from '../../shared/dishes';
import {ScrollView, View} from 'react-native'
import CustomHeader from '../../components/CustomHeader'
export default class Main extends Component{

    constructor(props){
        super(props);
        this.state={
            dishes: DISHES,
            selectedDish: null
        }
    }
    onDishSelect(dishId){
        this.setState({selectedDish: dishId})
    }
    render(){ 
        return(
            <View>
            <CustomHeader isHome={true}  title={'Home'} navigation ={this.props.navigation}/>
                <ScrollView style={{backgroundColor:'white',padding:5,width:"100%"}}>
                    <Menu dishes= {this.state.dishes} onPress={(dishId) =>this.onDishSelect(dishId)} />
                </ScrollView>
            </View>
            
        )
    }
}