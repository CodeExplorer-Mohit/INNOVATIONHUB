const BlogCardHead = (props) => {
    return (
        <div className="flex flex-col justify-center items-start w-full">
            <div className="flex justify-start items-center w-full">
                <span className="w-[15px] h-[15px] rounded-[50%] bg-gradient-to-l to-[#f37335] from-[#fdc830]"></span>
                <h2 className="text-[2.5rem] text-[#333333] hover:text-[#1260A0] font-[600] ml-2">
                    {props.Heading}
                </h2>
            </div>
            <p className="text-[.95rem] text-[#555555] my-2">
                {props.Description}
            </p>
        </div>
    )
}

export default BlogCardHead
