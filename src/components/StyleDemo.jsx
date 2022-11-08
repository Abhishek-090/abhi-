import React ,{useState}from 'react'
import './mystyle.css'
import style from './mypage.module.css'

function StyleDemo()
{
    const num=1200;
    var name="rahul";
    const [uname,setUserName] = useState("Abhishek");
    const [salary,setSalary] = useState("0.0");
    const [bonus,setBonus] = useState("0.0")

    // uname="None"
    function handleButton()
    {
       console.log("Button clicked") 
    }

    function handleName(event)
    {
        //console.log(event.target.value)
        //uname = event.target.value; 
        setUserName(event.target.value)
    }
    function handleButton1()
    {
      console.log("You are clicking on salary")
    }
    function handleName1(event){
        setSalary(event.target.value)
    }

    function handleButton2(){
        console.log("You are clicking on bonus")
    }
    function handleName2(event){
        setBonus(event.target.value)
    }
    return(
        <>  <p className='info salary'>Enter your salary : {salary}</p>
            <p className='info Bonus'>Enter your Bonus : {bonus}</p>
           
            <p className='info'> Hello Style Page : {uname}</p>
            <p className={style.successinfo}>
                Success
            </p>
            <p>User name is {name}</p>
            <p className={style.error}> 
                Error Occured - literals : 
                {3+num}
                
            </p>
            <p>
              Username :  {name}
            </p>
            <p>
                <input type="text" onChange={handleName}/>
                <button onClick={handleButton}>Click Me</button><br/>
                
                <input type="text" onChange={handleName1}/>
                <button onClick={handleButton1}>Click for salary</button><br/>
                
                <input type="text" onChange={handleName2}/>
                <button onClick={handleButton2}>Click for Bonous</button><br/>
            </p>
        </>
    );
}
export default StyleDemo 



