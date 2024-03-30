import GrandChildComp from "./grandChildComponents"

const ChildComp = () =>{

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
        <GrandChildComp />
        </div>
    )
}

export default ChildComp