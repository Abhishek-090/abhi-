import React from "react";
const  Revision = () => { 
 

    const container={
       border:"2px solid orange",
       display: "block",
       margin: "0 auto",
       overFlow: "hidden",
        
    }

    const List ={
        border:"2px solid orange",
        listStyle: "none",
    }
    
     return(
       <div style={container}>
           <h1  >
               Hello React
           </h1>

            
               <ul>
                   <li style={List}>one</li>
                   <li style={List}>two</li>
                   <li style={List}>3</li>
                   <li style={List}>4</li>
                   <li style={List}>5</li>
               </ul>
            
       </div>  
     );
}
export default Revision;