import React, {useState} from 'react'

 export const NewChapter = () => {
     const [name,setName] = useState("none");
     const change =(e) =>{
      const Newname = e.target.value;
       setName(Newname);
     } 
    return (
        <div>
            <h5>Customer Details : {name}</h5>
            <input type="text" onChange={change}/>

        </div>
    )
}


