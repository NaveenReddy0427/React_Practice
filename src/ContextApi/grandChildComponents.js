

const GrandChildComp = (props) => {

    return(
        <>
        <p style={{
            color: props.color
        }}>
        Color: {props.color}
        </p>
        </>
    )
}

export default GrandChildComp;