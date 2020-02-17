import React from 'react';
import klasi from './Cockpit.css'

const cockpit =(props) =>{

    let buttonClasses =[klasi.buttoon];

    if(props.show){
        buttonClasses.push(klasi.greenDOD);

    }

    let classList=[];
    if(props.userList.length<=2){
      classList.push(klasi.red);
    }
    if(props.userList.length<=1){
      classList.push(klasi.bold);
    }
    

   return(
       <div>
    <p className={classList.join(' ')}>This is Working!!!!111</p>
    <button className={buttonClasses.join(' ')} onClick={props.click}>Toggle</button>
       </div>
   
   ); 
}

export default cockpit;