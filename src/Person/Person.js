import React from 'react';
import klasi from './Person.css'

const person = (props) =>{

    
    return(
        <div className={klasi.Person}>
            <hi>Hi I am {props.name}.</hi>
             <p>I am {props.age} years old.</p>
             <button onClick={props.click}>Delete Person!!!</button>
             <input className={klasi.input} onChange={props.change} type="text" value={props.name}></input>
        </div>

       
    );
}

export default person;