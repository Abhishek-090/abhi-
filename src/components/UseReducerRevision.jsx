import React, { useReducer } from 'react'
function reducer(state, action) {
    switch (action.type) {
        case "chnumber":
            console.log(state.show)
            return{
                num:state.num+1,
                dis:state.num*10,
                show:state.show
            }

          case "toggle":
              return{
                  num:state.num,
                  dis:state.dis,
                  show:!state.show
              } 

        default:
            return state
    }
}

const UseReducerRevision = () => {
    const [state, dispatch] = useReducer(reducer, { num: 0, dis: 0, show: true });
    return (
        <div>
            <h2>UseReducerRevision </h2>
            <p>
                show state is {
                 state.show ? "True" : "False"
                }
            </p>
            <p>
                number:{state.num}
                <br />
                {
                    state.show && <p>Discount= {state.dis}</p>
                }
            </p>

            <p>
                <button onClick={() => {
                    dispatch({ type:"chnumber" });
                    // dispatch({ type:"toggle" });
                }
                }>Get Number</button>
                
            </p>
            <p>
                <button onClick={() => {
                    dispatch({ type:"toggle" });
                }
                }>toggle</button>
            </p>
        </div>
    )
}
export default UseReducerRevision