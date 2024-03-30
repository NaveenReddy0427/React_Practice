import { useContext } from "react";
import { colorContext } from "../context";

function GrandChildComp(){

    const color = useContext(colorContext)
    return(
        <>
        <p style={{
            color: color
        }}>
        Color: {color}
        </p>
        </>
    )
}

export default GrandChildComp;