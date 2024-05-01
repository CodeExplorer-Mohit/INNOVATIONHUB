const BenifitsCardItem = (props) => {
    return (
        <div className="flex flex-col justify-center items-start w-[270px] p-3 m-5 duration-300 hover:shadow-[0_0_10px_rgba(21,87,153,.1)] rounded-[10px]">
            <img src={props.IconLink} alt="icon" className="my-1" />
            <h3 className="text-[#333333] font-[600] my-1">{props.Heading}</h3>
            <p className="text-[#555555] text-[.9rem]">{props.Text}</p>
        </div>
    )
}

export default BenifitsCardItem
