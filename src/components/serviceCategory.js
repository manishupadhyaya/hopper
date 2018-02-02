import React, {Component} from "react"

class ServiceCategory extends Component {
    
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.getData(this.props.category.c, this.props.category.i)
    }

    render(){
        
        return (          
            <div className="category" onClick={this.handleClick}>
                <img
                    src = { this.props.category ? 
                        (process.env.PUBLIC_URL + "/img/ic/ic_s" + this.props.category.c.toLowerCase().replace("","_").replace("&","and").concat(".png")):null} 
                    style={{maxWidth: "100%"}}
                    />
                <div className="store-name">{
                    this.props.category ?
                    (
                        process.env.PUBLIC_URL + this.props.category.c)
                        :null
                    }
                
                </div>
            </div>     
        )
    }
}
export default ServiceCategory; 
