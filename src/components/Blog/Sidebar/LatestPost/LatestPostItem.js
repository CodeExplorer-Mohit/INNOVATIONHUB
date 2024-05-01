const LatestPostItem = (props) => {
    return (
        <li className="flex justify-center items-center w-full my-3">
            <div className="flex justify-center items-center w-[25%]">
                <img src={props.UserImg} alt="postImg" className="w-[52px]" />
            </div>
            <div className="flex flex-col justify-center items-start ml-2 w-[75%]">
                <p className="text-[#222222] font-[600] text-left leading-4 duration-300 hover:text-[#f6986b]">
                    {props.Title}
                </p>
                <p className="text-[#555555] text-[.9rem] mt-1">
                    {props.PostDate}
                </p>
            </div>
        </li>
    )
}

export default LatestPostItem
