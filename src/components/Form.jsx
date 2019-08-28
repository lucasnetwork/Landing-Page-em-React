import React,{Component} from 'react'

class Form extends Component{
    constructor(){
        super()
        this.state = {
            nome:'',
            email:'',
        }
    }
    render(){
        return(
            <form className="form" action="">
                <h1>Formulario</h1>
                <input placeholder="nome" value={this.state.nome}/>
                <input placeholder="email" value={this.state.email}/>
                <p>
                {this.props.nome}</p>
                <button>enviar</button>
            </form>
        )
    }
}

export default Form