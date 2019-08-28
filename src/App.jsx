import React,{Component} from 'react';
import Body from './components/Body'
import Header from './components/Header'
import Form from './components/Form'
class App extends Component{
  constructor(props){
    super(props)
    this.state = {header:'Lorem ipsum dolor sit',bodyheader:'fdsafs',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae elit id libero mollis ullamcorper. Sed vulputate, nibh at dapibus porttitor, nibh magna accumsan risus, id aliquam leo erat ut.'}
  }
  render(){
    return(
      <>
        <Header header={this.state.header}/>
        <Body header={this.state.bodyheader} text={this.state.text}/>
        <Form/>
      </>
    )
  }
}

export default App;
