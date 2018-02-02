import React, {Component} from 'react'
import './canteen5styles.css'
import Client from '../services/client';
import ProductCategories from "../components/productCategories"
import SellingOrServices from '../components/tab'
import ModalModalExample from '../components/review'

class Store extends Component
{
    constructor(props){
        super(props)
        this.state =
        {
               store: {
                   name: "",
                   shortDescription: "",
                   daysOpen: "",
                   address: "",
                   storesData: "",
                   categories: {},
                   type: "",
                   credit:""
               }
        }
        console.log(this.state.categories)
    }
    componentWillMount()
        {
            this.setState({
                store: JSON.parse(localStorage.getItem('store'))
            })
            console.log(this.state.shopName)
            console.log(this.state.shortDescription)
            console.log(this.state.storesData)
            console.log(this.state.store.type)
        }
   
    clickFeed(){
        this.setState({
            feedTab: true,
            sellingTab: false
        })
    }
    clickSelling(){
        this.setState({
            feedTab: false,
            sellingTab: true
        })
    }
    checkCredit(){
        if(this.state.store.credit=="0")
        {
            alert("Requested. Wait For Approval")
        }
        else if(this.state.store.credit=="1")
        {
            alert("Approved")
        }
        else if(this.state.store.credit=="-2")
        {
            alert("Rejected")
        }
        else{
            alert("Feature Not Available")
        }
    }

    render(){
        return(
            <div className="storeWhole">

                <div className="storeDetails">
                    <div className="storeHeader">
                        <div style={{flex: "0.2"}}>
                        </div>
                        <div className="storeNameSymbol">
                        {
                            this.state.store.name.split(' ').map((item)=>{return item[0]}).join('')}

                        </div>
                        <div style={{flex: "0.6"}}>
                        </div>
                        <div className="storeNameAndDes" style={{display: "flex", flexDirection: "column"}}>
                        <div className="storeName">
                        {this.state.store.name}
                        </div>
                        <div className="shortDescription">
                        {this.state.store.shortDescription}
                        </div>
                        </div>

                        <div className="storeStatus">
                            Open
                        </div>
                    </div>
                
                    
                    <div className="details" style={{display:"flex"}}>
                    <div style={{flex: "0.21"}}></div>
                    <div style={{flex: "4"}}>    Open On  :{this.state.store.daysOpen.replace("[","").replace("]","").replace(/"/gi,"")}
                    </div>
                    </div>
                    <div className="details" style={{display:"flex"}}>
                    <div style={{flex: "0.21"}}></div>
                    <div style={{flex: "4"}}>    Timings  :{this.state.store.openAt} to {this.state.store.closeAt}
                    </div>
                    </div>
                    <div className="details" style={{display:"flex"}}>
                    <div style={{flex: "0.21"}}></div>
                    <div style={{flex: "4"}}>    Address  :{this.state.store.address}
                    </div>
                    </div>
            
                </div>
                
                <div className="storeActions">
                            <img src={process.env.PUBLIC_URL + "/img/cheque-rupee.png"} onClick={
                                this.checkCredit()
                            }/>
                            <img src={process.env.PUBLIC_URL + "/img/menu-icon.png"}/>
                            {/* <img src={process.env.PUBLIC_URL + "/img/review.png"}/> */}
                            <ModalModalExample/>
                            <img src={process.env.PUBLIC_URL + "/img/accessibility.png"}/>
                </div>
                
                <div className="storeContent">
                <div className="storesBar">
                        <div className="selling" >
                            {
                                <SellingOrServices store = {this.state.store}/>
                            }
                        </div>
                </div>
                </div>
                </div>
        )
    }
}
export default Store;