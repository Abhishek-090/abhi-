import React,{useState,useEffect} from 'react'

function EffectDemo() {
    const [num,setNum] = useState(0)
    const [name,setName] = useState("")
   
    useEffect(()=>{
        console.log("Use Effect called")
    },[num])

    return (
        <div>
            <h2>UseEffect Demo</h2>
            <p>
                My Number is {num}<br/>
                User Name is {name}<br/>
                <input type="text" onChange={(event)=>setName(event.target.value)} /><br/>
                <button onClick={()=>setNum(num+1)}>Change Number</button>
            </p>
        </div>
    )
}

export default EffectDemo
