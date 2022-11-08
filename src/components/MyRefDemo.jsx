import React,{useRef,useState} from 'react'

function MyRefDemo() {
   
    const [userName,setUserName]=useState('None')
    const empRef = useRef(null)
    const salaryRef = useRef(null)
    

    // function handleUserName(event)
    // {
    //     setUserName(event.target.value)
    //     console.log(event.target.value)
    // }
    const showEmployeeName=()=>{
        let empname = empRef.current.value 
        let salary = salaryRef.current.value

        console.log(empname)
        console.log("salary = "+salary)
    }
        return (
        <div>
            UserName = {userName}
            <input type="text" onChange={(event)=>setUserName(event.target.value)} />
            <p>
                Employee name <input type="text" placeholder='Employee Name' ref={empRef} />
                <br/>
                <input type="text" ref={salaryRef} />     
                <button onClick={showEmployeeName}>Get Employee Name</button>
            </p>
        </div>
    )
}

export default MyRefDemo
