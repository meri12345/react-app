import React from 'react';
import styled from 'styled-components';
import klasi from './Person.css'

const person = (props) =>{

    
    return(
        <div className={klasi.Person}>
            <hi>Hi I am {props.name}.</hi>
             <p>I am {props.age} years old.</p>
             <button onClick={props.click}>Delete Person!!!</button>
        </div>

       
    );
}

export default person;