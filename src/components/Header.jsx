import React,{Component} from 'react'

class Header extends Component{
    render(){
        return(
            <h1 className='header'>{this.props.header}</h1>
        )
    }
}

export default Header