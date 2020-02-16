import React from 'react';



const validation =(props) =>{

    let msg='Long enough';

    if(props.length<=5){
        msg='Not long enough'
    }

return(<p>{msg}</p>);

}

export default validation;