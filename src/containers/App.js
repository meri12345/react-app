import React, { Component } from 'react';
import klasi from './App.css';
import Persons from '../components/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

  state={
    userList:[
      {name:'Alex', age:32},
      {name:'Blue', age:2},
      {name:'Kim', age:29}
    ],
    show:true
  }

  toggleHandler=()=>{
    let change=this.state.show;
    change=!change;
    this.setState({show:change});
  }

  deleteHandler=(index)=>{
    let niza = this.state.userList;
    niza.splice(index,1);
    this.setState({userList:niza});
  }

  changeHandler=(event,i)=>{
    let niza = [...this.state.userList];
    niza[i].name=event.target.value;
    this.setState({userList:niza})
      
  }

  render() {

    let list=null;

    if(this.state.show){
      
     list =       
        <Persons
        userList={this.state.userList}
        click={this.deleteHandler}
        change={this.changeHandler}
        />
        
         }

    return(
    
          <div className={klasi.App}>
            <Cockpit
            show={this.state.show}
            userList={this.state.userList}
            click={this.toggleHandler}/>
            {list}
        </div>
      
      
      );
  }
}

export default App;