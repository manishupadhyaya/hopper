import React,{Component} from "react";

import ServiceCategory from "./serviceCategory";

import Client from '../services/client';

import "../styles/categories.css"

class ServiceCategories extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            dropdown: false,
            categoryExpanded: false,
            stores: [],
            products: []
        }
        this.getServicesCategoryData = this.getServicesCategoryData.bind(this);
        console.log(props)
    }
    _toggleDropdown(){
        this.setState(
            {
                dropdown: true
            }
        )
    }
    _toggleUp(){
        this.setState({
            dropdown: false
        })
    }
    getServicesCategoryData(category, categoryId){
        Client.getServicesCategoryData(category, categoryId).then((res)=>{
            this.setState({
                stores: res.providersList,
                categoryExpanded: true
            })
        })

    }
    componentWillReceiveProps(p){

        console.log(p);
    }
    render(){

        var categoriesReduced = [];

        for(var i=0; i<6; i++)
        {
            categoriesReduced.push(this.props.categories[i]);
        }

        console.log(categoriesReduced);

        return (
        
        <div className="categories-container">
            {  
                this.state.dropdown
                ?
                <div className="categories-icons">
                    {                        
                        this.props.categories.map((category)=>(
                            <ServiceCategory getData={this.getServicesCategoryData} category={category}/>
                        ))
                    }
                </div>                                 
                :
                <div className="categories-icons">                   
                    {
                        categoriesReduced.map((category)=>(
                            <ServiceCategory getData={this.getServicesCategoryData} category={category} />
                        ))
                    }                
                </div>
            }     

            <div className="symbol-container">
                <img className="symbol" src={process.env.PUBLIC_URL + "/img/symbol.png"} onClick={()=>this._toggleDropdown()}/>
                <img className="symbol" src={process.env.PUBLIC_URL + "/img/symbolInverse.png"} onClick={()=>this._toggleUp()}/>
            </div> 

            {
                this.state.categoryExpanded
                ?
                <div className="category-expanded-container">
                    <div className="stores-header">SERVICES</div>
                    {
                        this.state.stores.map((store)=>(
                            <div className="store">{store.name}</div>
                        ))
                    }
                </div>      
                :
                null
            
                
            }
    </div>
        )
    }
}

export default ServiceCategories;