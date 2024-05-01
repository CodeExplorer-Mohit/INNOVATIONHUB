const PaginationButton = (props) => {
    return (
        <button
            onClick={props.OnClickHandler}
            className={`text-[${props.Color}] font-[600] text-[1.2rem] mx-2 ${props.Style}`}
        >
            {props.text}
        </button>
    )
}

export default PaginationButton
