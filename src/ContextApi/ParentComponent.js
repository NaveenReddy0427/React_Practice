import { useState } from "react"
import ChildComp from "./childComponent"

const ParentComp = (props) =>{

    const [color, setColor] = useState("#000000")
    return(
        <>
        <h1>Pick a color</h1>
        <input type="color"
                value={color}
                onChange={(e)=>{
                    setColor(e.target.value)
                }}/>

        <ChildComp color={color}/>
        </>
    )
}

export default ParentComp;