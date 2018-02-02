import React,{Component} from "react";

import ProductCategory from "./productCategory";

import Client from '../services/client';

import "../styles/categories.css"

import { BrowserRouter, Link} from 'react-router-dom'

import Store from '../routes/store'

class ProductCategories extends Component{

    constructor(props){
        super(props);

        this.state = {
            dropdown: false,
            categoryExpanded: false,
            stores: [],
            shopName: [],
            city: localStorage.getItem('currentCity')
        }

        this.getProductCategoryData = this.getProductCategoryData.bind(this);
        this.storeLink = this.storeLink.bind(this);
        this.shortStoreDescription = this.shortStoreDescription.bind(this);
    }
    storeLink(name){
        
        localStorage.setItem('storeData', name)
    }
    shortStoreDescription(description){

        localStorage.setItem('shortDescription', description)

    }
    daysOpen(daysOpen){
        localStorage.setItem('daysOpen', daysOpen)
    }
    openAt(openAt){
        localStorage.setItem('openAt', openAt)
    }
    closeAt(closeAt){
        localStorage.setItem('closeAt', closeAt)
    }
    address(address){
        localStorage.setItem('address', address)
    }
    storesData(storesData){
        localStorage.setItem('storesData', storesData)
    }
    _toggleDropdown(){
        this.setState(
            {
                dropdown: true
            }
        )
    }
    
    getProductCategoryData(category, categoryId, city){
        Client.getProductCategoryData(category, categoryId, this.state.city)
        .then((res)=>{
            this.setState({
                stores: res.storesList,
                products: res.productsList,
                categoryExpanded: true,
            })
        })
    }

    _toggleUp(){
        this.setState({
            dropdown: false
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
                            <ProductCategory getData={this.getProductCategoryData} category={category}/>
                        ))
                    }
                </div>                                 
                :
                <div className="categories-icons">                   
                    {
                        categoriesReduced.map((category)=>(
                            <ProductCategory getData={this.getProductCategoryData} category={category} />
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
                    <div className="stores-header">STORES</div>
                    {
                        this.state.stores.map((store)=>(
                            <Link to={'/store'} onClick={()=>
                            {
                                
                            localStorage.setItem('store', JSON.stringify(store));
                             
                             }}>
                                
                        <div className="store">
                        {store.name}
                        </div>
                            </Link>
                        ))
                    }
                    <div className="products-header">PRODUCTS</div>
                    {
                        this.state.products.map((product)=>(
                            
                        <div className="product">
                        {product.name}

                        </div>

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

export default ProductCategories;