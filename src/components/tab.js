import React,{Component} from 'react'
import { Tab, Menu, Grid } from 'semantic-ui-react'
import '../routes/canteen5styles.css'


class SellingOrServices extends Component
{
    componentWillReceiveProps(props){
        this.setState({
            store: props.store,
            showSelling: props.store.type.includes("Retailer"),
            showServices: props.store.type.includes("Service")
        })
    }

    constructor(props){

        super(props);

        this.state={
            store: this.props.store,
            showSelling: this.props.store.type.includes("Retailer"),
            showServices: this.props.store.type.includes("Service")
        }
    }


render(){
    var panes = []
    if(this.state.showSelling){
        panes.push({
            menuItem: 
            <Menu.Item>Selling</Menu.Item>,
            render: () => 
                <Tab.Pane>
                    <div className="sellingData">
                    {
                        this.state.store.categories.map((data)=>(
                        <div>
                        <div>{data}</div>
                        </div>
                        ))
                    }   
                    </div>
                </Tab.Pane>
                    })
    }
    if(this.state.showServices){
        panes.push({
            menuItem: 
            <Menu.Item>Service</Menu.Item> ,
            render: () => 
            <Tab.Pane>
                   <div className="sellingData">
                        {/* {
                            this.state.store.services.map((data)=>(
                            <div>
                            <div>{data}</div>
                            </div>
                            ))
                        }    */}
                   </div>
            </Tab.Pane>
        })
    }
        panes.push({
            menuItem:
            <Menu.Item>Feed</Menu.Item>,
            render: () =>
            <Tab.Pane>
                    <div className="feed">
                    No feeds available
                    </div>
            </Tab.Pane>
        })
    
    return(
        <Tab panes={panes} defaultActiveIndex={0} />
    )}
}

export default SellingOrServices