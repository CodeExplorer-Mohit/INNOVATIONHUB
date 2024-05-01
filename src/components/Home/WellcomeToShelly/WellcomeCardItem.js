const WellcomeCardItem = (props) => {
    return (
        <div className="flex flex-col justify-center items-start w-[260px] rounded-[10px] p-4 m-4 bg-[#FFFFFF] shadow-[0_0_10px_rgba(0,0,0,0.05)]">
            <img src={props.Icon} alt="icon" className="my-1" />
            <p className="text-[1.2rem] text-[#222222] my-1">{props.Title}</p>
            <p className="text-[#555555] text-[.95rem] my-1">{props.Text}</p>
        </div>
    )
}

export default WellcomeCardItem
