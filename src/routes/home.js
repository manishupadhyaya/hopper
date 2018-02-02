import React,{Component} from 'react'

import '../styles.css';

import { Tab, Menu, Grid } from 'semantic-ui-react'

import Client from '../services/client';

import ProductCategories from "../components/productCategories";

import ServiceCategories from "../components/serviceCategories";

class Home extends Component{

    constructor(){
      super();
      this.state = {
        productCategories: [],
        serviceCategories: [],
        promos: []
      }
    }
       
        componentDidMount(){

        Client.userAppData().then((res)=>{

            localStorage.setItem('Data', JSON.stringify(res));
            console.log(res);
            this.setState({
                productCategories: res.P_CATEGORIES,
                serviceCategories: res.S_CATEGORIES,
                promos: res.promos,
            })
        }) 
    }

    render(){
      return(
          <div className="Page">
          <div className="NavBar">
          <div className="city">
          <select>
        {/* //   onChange={this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value)} */}
              <option value="Guwahati" onClick={()=>{
                  localStorage.setItem('currentCity','Guwahati')
                  }} selected>Guwahati</option>
              <option value="Silchar" onClick={()=>{
                  localStorage.setItem('currentCity','Silchar')
              }}>Silchar</option>
          </select>
          </div>
          </div>
          <div className="toBeAdded"></div>
          <div className="toBeAdded"></div>
        <div className="wholeContainer">
            <div className="container1">
                <div className="deals">
                  <span className="deals-text">DEALS</span>
                  {
                      this.state.promos.map((promo)=>(
                          <div className="img-deals">
                          <img src={promo.image} style={{maxWidth: '100%'}} />
                        </div>
                      ))
                  }
                </div>
            </div>
            <div className="container2">
                <div className="form">
                    <div className="searchProducts">
                        Search Products <br/> or Stores&nbsp;&nbsp;&nbsp;
                    </div>
                    <input type="text" className="searchInput"/>
                    <div className="searchInputButton">
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="afterSearchButton">
                    </div>
                </div>
                <div className="branch">CATEGORIES
                </div>
                <ProductCategories categories={this.state.productCategories} />
                <div className="branch bore">SERVICES
                </div>
                  <ServiceCategories categories={this.state.serviceCategories} />
                </div>
        </div>
        </div>

      )
    }

}
export default Home