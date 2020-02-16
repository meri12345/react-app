import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {

state={
  howLong: 0,
  text:''
}


countString=(event)=>{
    this.setState({howLong: event.target.value.length,
    text: event.target.value })
}

removeBox=(index)=>{
    const newText = this.state.text.split('');
    newText.splice(index,1);
    const update = newText.join('');
    this.setState({text:update})
}

   render() {
  
   const list = (
     <div>
       {
         this.state.text.split('').map((el,index)=>
          {
            return <Char click={()=>this.removeBox(index)} bukva={el} key={index}/>
          })
       }
     </div>
   );

    return(
      <div>
       <input onChange={this.countString} type="text" value={this.state.text}></input>
        <Validation length={this.state.howLong}/>
        {list}
      </div>
      );
  }
}

export default App;