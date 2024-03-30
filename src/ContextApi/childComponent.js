import GrandChildComp from "./grandChildComponents"

const ChildComp = (props) =>{

    return(
        <div
        style={{
            border: `10px solid #000000`,
            marginLeft: "50px",
            padding: "10px",
            fontSize: "30px",
            width: "300px"

        }}
        >
        <GrandChildComp color={props.color}/>
        </div>
    )
}

export default ChildComp