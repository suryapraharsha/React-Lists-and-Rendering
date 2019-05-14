import React, { Component } from 'react';
import Validation from './Validation/Validation';
import './App.css';
import Char from './Charcomponent/CharComponent';
class App extends Component {
  
  state = {
    string:''
  
  }
  

  lengthChangeHandler = (event)=>{
    
    
    this.setState({
      string : event.target.value
     
    });
    
     
  }
 deleteCharHandler = (index)=>{
    const text = this.state.string.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({
        string: updatedText
    });

 }

  render() {

    const charList = this.state.string.split('').map((ch,index) =>{
      return <Char 
      character={ch} 
      key={index} 
      clicked = {()=>{this.deleteCharHandler(index)}}/>;
    
    });
    return (
      <div className="App">
        <p> Enter any text</p>
        <input type='text' onChange = {(event)=>this.lengthChangeHandler(event)} value={this.state.string}/>
        <p>length in App {this.state.string.length}</p>
        <Validation length={this.state.string.length} />
        <p> click on the box to delete it !</p>
        {charList}
      </div>
    );
  }
}

export default App;
