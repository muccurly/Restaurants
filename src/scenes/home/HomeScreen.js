import React,{Component} from 'react'
import Menu from '../../components/Menu';
import {DISHES} from '../../shared/dishes';
import {ScrollView} from 'react-native'
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
            <ScrollView style={{backgroundColor:'white',padding:5}}>
                <Menu dishes= {this.state.dishes} onPress={(dishId) =>this.onDishSelect(dishId)} />
            </ScrollView>
            
        )
    }
}