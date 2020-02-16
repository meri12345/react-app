import React, { Component } from 'react';
import klasi from './App.css';
import Person from './Person/Person';

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

  render() {

    let classList=[];
    if(this.state.userList.length<=2){
      classList.push(klasi.red);
    }
    if(this.state.userList.length<=1){
      classList.push(klasi.bold);
    }
    
     let buttonClasses =[klasi.buttoon];


    let list=null;

    if(this.state.show){
      
     list = (
      <div>
        {
          this.state.userList.map((el,ind)=>
          {
           
            return <Person click={()=>this.deleteHandler(ind)} name={el.name} age={el.age} key={ind}/>
          }
          )}
      </div>
    );
          buttonClasses.push(klasi.greenDOD);
        }

    return(
    
          <div className={klasi.App}>
          <p className={classList.join(' ')}>This is Working!!!!111</p>
          <button className={buttonClasses.join(' ')} onClick={this.toggleHandler}>Toggle</button>
          {list}
        </div>
      
      
      );
  }
}

export default App;