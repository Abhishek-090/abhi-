import React from 'react'

function Message(props)
{
    console.log(props.mymsg)
    return (
        <div>
            Your Information is - {props.mymsg} 
        </div>
    );
}

export default Message 