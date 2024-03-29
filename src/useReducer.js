import { useReducer } from "react"
import "./useReducer.css"

function counterInc(state, action){
    switch(action.type){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        case "RESET":
            return 0
        default:
            return state

    }
}

function Counter() {
  const [count, dispatch] = useReducer(counterInc, 0);

  return(
    <>
        <h3 className="head">Counter App</h3>
        <div className="btn-container">
            <button className="btn btn-primary" onClick={()=>{
                dispatch({type:"DECREMENT"})
            }}>-</button>
            <div className="counter-div">Counter: {count}</div>
            <button className="btn btn-primary" onClick={()=>{
                dispatch({type: "INCREMENT"})
            }}>+</button>
            <button className="btn btn-danger" onClick={()=>{
                dispatch({type: "RESET"})
            }}>RESET</button>
        </div>
    </>
  )
}



export default Counter