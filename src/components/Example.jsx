import React from 'react'

function Example(){
    const mystyle={
        color:"green",
        background:"blue",
        height:"70px"
    }
    const mydiv={
        border:"3px solid red",
        background:"#002211",
        color:"#fff",
        fontSize:"30px"
    }
    console.log(mystyle)
    return (
        <>
            <h1 style={mystyle}>
                Css Demo
            </h1>
            <div style={mydiv}>
                Hello
            </div>

            <p style={{color:"red"}}>
                this is my paragraph
            </p>
        </>
    );    
}

export default Example