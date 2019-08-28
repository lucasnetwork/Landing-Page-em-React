import React,{Component} from 'react'

class Body extends Component{
    render(){
        return(
            <div className="body">
                <h2>{this.props.header}</h2>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Body