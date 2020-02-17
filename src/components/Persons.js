import React from 'react'
import Person from './Persons/Person'

const persons = (props) => 
    props.userList.map((person,index) => {
        return <Person
          name={person.name}
          age={person.age}
          key={index}
          click={props.click}
          change={(event)=> props.change (event,index)}/>
        
        });

export default persons;