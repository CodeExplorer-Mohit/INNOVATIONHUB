const TagItem = (props) => {
    return (
        <li className="flex justify-center items-center m-1 m rounded-[30px] border h-[30px] px-2">
            <p className="text-[#333333] text-left leading-4 duration-300 hover:text-[#f6986b]">
                {props.Title}
            </p>
        </li>
    )
}
export default TagItem
