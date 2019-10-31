import React,{Component} from 'react'

class Form extends Component{
	constructor(){
		super()
		this.state = {
			form:{
				name:'',
				email:'',
			}
		}
	}
	oanChange(event){
		const form = {...this.state.form}
		form[event.target.name] = event.target.value
		this.setState({form})
	}
	render(){
		return(
			<form className="form" action="">
				<h1>Formulario</h1>
				<label>Nome</label>
				<input placeholder="nome" value={this.state.form.nome} name="name" onChange={e=>this.oanChange(e)}/>
				<label>Email</label>
				<input placeholder="email" value={this.state.form.email} name="email" onChange={e=>this.oanChange(e)}/>
				<p>
					{this.props.nome}</p>
				<button>enviar</button>
			</form>
		)
	}
}

export default Form