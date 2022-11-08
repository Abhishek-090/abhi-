 import React,{useRef} from 'react'
 
 export const Form = () => {
     const unameRef = useRef(null)


     
     return (
         <> 
          <h1>Full movi show is here</h1>   
          <input type="text" ref={unameRef}/>
          <button onClick="submit"> ka ho sab thik ba </button>
         </>
     )
 }
 