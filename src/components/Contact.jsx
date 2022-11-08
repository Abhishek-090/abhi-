import React from 'react'

// {uname,address}
function Contact(props)
{
    function userClick()
    {
        console.log("you have clicked on Hello");
    }
    const {uname,address} = props;
    return (
      <div>
          <p onClick={userClick}>Hello</p>
          <p>
              Name is :{uname} and Address = {address}
          </p>
      </div>  
    );    
}

export default Contact