import {React, useState} from 'react';


export function Employe() {
    const [enterSalary,setEnterSalary] = useState(0)
    const [enterBonus,setEnterBonus] = useState(0)

    const salary = (e) => {
      const a = e.target.value;
      setEnterSalary(a)
    }

    
    const bonus = (e) => {
        const b = e.target.value;
        setEnterBonus(b);
      }
    
      const totalAmount = (e) => {
         
         //const c = document.getElementsByTagName("p")[2].innerHTML  = parseInt((salary * bonus)) 
         
        var total=parseInt(enterSalary) +parseInt(enterBonus) 
        console.log(total)
      }
    
    return (
       <>
       <p>Your Salary is : {enterSalary}</p>
       <p>Your Bonus is : {enterBonus}</p>
       <p></p>
       <input type="text" onChange={salary}/>
       <input type="text" onChange={bonus}/>
       <button onClick={totalAmount}>Total amount is:</button>
       </>
    )
}
