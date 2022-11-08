import React from 'react';
import Style from './Styles.module.css';

const Input = () => {

     function ButtonClicked()
     {
         console.log("you have to clicked Button");
     }
     function handleInput(event){
         console.log(event.target.value);
     }
     function sum(n1,n2)
     {
         let result = n1 + n2;
          return result;
     }
    console.log(sum(2,2));
    return(
        <>
        <p id="one"></p>
        <p className="property">hello style page</p>
        <p>{sum(2,4)};</p>
          <h1 className={styleMedia.h1}>INPUT FORM</h1>
          <input type="text" onChange={handleInput} value="input here"/>"
          <button onClick={ButtonClicked}>clicked Here</button>
           

        </>
    );
}

export default Input;