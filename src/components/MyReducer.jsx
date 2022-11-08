import React,{useReducer,useState} from 'react'

function reducer(state,action)
{
    switch(action.type)
    {
        case "number":
            return {
                num:state.num+1,
                disc:state.num *10,
                show: state.show 
            }

            case "toggle":
            return {
                num:state.num,
                disc:state.disc,
                show: !state.show
            }
        default:
            return state
    }
}



function MyReducer() {
    const [state,dispatch] = useReducer(reducer,{num:0,disc:0,show:true})
    //const [num,setNum] = useState(0)
    //const [disc,setDisc] = useState(0)
    return (
        <div>
            <h2>Reducer Demo</h2>
            <p>
                Number : {state.num}
                <br/>
                {
                    state.show &&  <p>Discount = {state.disc}</p>
                }
               
            </p>
            <p>
                <button onClick={ ()=>{
                    dispatch({type:"number"});
                    dispatch({type:"toggle"})
                }
                    
                }>Get Number</button>
            </p>
        </div>
    )
}

export default MyReducer
