import {React, useState} from 'react';


export function Student(){
   const [physics, setPhysics]=useState(0);
   const [maths,setMaths]=useState(0);
   const [science,setScience]=useState(0);

   const phy = (e)=>{
       const a =e.target.value;
       setPhysics(a)
   }
   const math = (e) =>{
       const b =e.target.value;
       setMaths(b)
   } 
   const sci = (e) =>{
       const c =e.target.value;
       setScience(c)
   }
     const totalMarks=(e)=>{
         var total=parseInt(physics) + parseInt(maths) + parseInt(science)
         document.getElementById('one').innerText =total;
         if (total >= 300) {
            document.getElementById('division').innerText = "1st Division";
         }
         else if (total <= 300 && total>225) {
            document.getElementById('division').innerText = "2nd Division";
         }
         else if (total <=225 && total >=150)
         document.getElementById('division').innerText = "3rd Division";
     }
     

    return(
      <>
      <p id="one"></p><p id="division"></p>
       <p> Enter your physics marks is {physics}</p>
       <p>Enter your maths marks is{maths}</p>
       <p>Enter your science marks is{science}</p>
       
       <input type="text" onChange={phy}/>
       <input type="text" onChange={math}/>
       <input type="test" onChange={sci}/>
       <button onClick={totalMarks}>total marks is:</button>
      </> 
    )

}