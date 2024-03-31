import { useState } from "react"
import ChildComp from "./childComponent"
import { colorContext } from "../context"

const ParentComp = () =>{

    const [color, setColor] = useState("#000000")
    return(
        <>
        <h1>Pick a color</h1>
        <input type="color"
                value={color}
                onChange={(e)=>{
                    setColor(e.target.value)
                }}/>
        <colorContext.Provider value={{color, setColor}}>
            <ChildComp/>      
        </colorContext.Provider>
        </>
    )
}

export default ParentComp;