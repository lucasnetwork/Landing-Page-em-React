import React,{Component} from 'react'
import Body from './components/Body'
import Header from './components/Header'
import Form from './components/Form'
class App extends Component{
    constructor(props){
    super(props)
    this.state = {header:'Lorem ipsum dolor sit',bodyheader:'Lorem ipsum dolor',
    text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam consectetur diam quis volutpat hendrerit.Nulla et erat vel urna vestibulum pulvinar at sit amet dolor.Phasellus maximus sem tincidunt, posuere erat eget, lobortis eros.Maecenas a ipsum pharetra, porta urna nec, aliquam ex.Aenean at tellus at purus placerat interdum.In pellentesque nibh sed dictum accumsan.In in leo quis sapien efficitur molestie eget a mauris.Nullam eu enim vel justo porta dictum vel nec mauris.Integer in augue sit amet turpis dapibus mattis.Duis hendrerit tellus a consequat porttitor.Suspendisse congue turpis nec ornare tempor.`}
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
