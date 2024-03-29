import { useReducer } from "react"
import "./useReducer.css"

function counterInc(state, action){
    switch(action){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        default:
            return state

    }
}

function Counter() {
  const [count, dispatch] = useReducer(counterInc, 0);

  return(
    <>
        <div className="btn-container">
            <button className="btn" onClick={()=>{
                dispatch("DECREMENT")
            }}>-</button>
            <div className="counter-div">Counter: {count}</div>
            <button className="btn" onClick={()=>{
                dispatch("INCREMENT")
            }}>+</button>
        </div>
    </>
  )
}



export default Counter