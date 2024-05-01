const HeadSection = (props) => {
    return (
        <section className="flex justify-center items-center w-[100%] h-[40vh] bg-[#F2F7FD]">
            <div className="flex justify-center items-center w-[80%] h-full relative">
                <span className="flex justify-center items-center text-center w-full h-full text-[#F37335] text-[11rem] font-[700] tracking-wide absolute z-[9] opacity-[.1]">
                    Shelly
                </span>
                <div className="flex flex-col justify-center items-center relative z-[10]">
                    <h2 className="text-[#333333] text-[4rem] font-[600] text-center w-full tracking-wide">
                        {props.Head}
                    </h2>
                    <p className="text-[#555555] text-center w-full">
                        Home | {props.SubHead}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HeadSection
