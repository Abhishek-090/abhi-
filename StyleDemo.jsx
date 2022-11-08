import React ,{useState}from 'react'
import './mystyle.css'
import style from './mypage.module.css'

function StyleDemo()
{
    const num=1200;
    var name="rahul";
    function handleButton()
    {
       console.log("Button clicked") 
    }

    function handleName(event)
    {
        console.log(event.target.value)

    }
    return(
        <>
            <p className='info'> Hello Style Page</p>
            <p className={style.successinfo}>
                Success
            </p>
            <p className={style.error}> 
                Error Occured - literals : 
                {3+num}
                
            </p>
            <p>
              Username :  {name}
            </p>
            <p>
                <input type="text" onChange={handleName}/>
                <button onClick={handleButton}>Click Me</button>
            </p>
        </>
    );
}
export default StyleDemo 