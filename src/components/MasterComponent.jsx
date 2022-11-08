import React,{useState} from 'react'

export function MasterComponent() {
  return (
    <div>MasterComponent</div>
  )
}


export function Details()
{
    const [info,setInfo] = useState("No Info");
    function userInfo(event)
    {
        var newInfo = event.target.value;
        setInfo(newInfo)
        console.log(newInfo)
    }
    return(
        <>
            <h3>Detail Component, {info}</h3>
            <input type="text" onChange={userInfo}/>
        </>
    );
}


export function Services()
{
    var number=0;
    const [num,setNum] = useState(0);
    const [userName,setUserName] = useState("None");
    //num=3
    function newServices()
    {
        setNum(num+1)
        setUserName(userName + "React");
        //number =number +1  
        //console.log(number) 
    }
    return(
        <>

            <h2>Employee services : {num}</h2>
            <h1>User Name is :{userName}</h1>
            <button onClick={newServices}>Generate Services</button>
        </>
    );
}