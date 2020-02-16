import React from 'react'

const charFunc = (props) => {

    const style={
        background: 'red',
        border: '1px solid black',
        padding: '20px',
        margin: '20px',
        display:'inline-block'
    }

    return(
        <div style={style} onClick={props.click}>
            <p >{props.bukva}</p>
        </div>
    
    );

}

export default charFunc