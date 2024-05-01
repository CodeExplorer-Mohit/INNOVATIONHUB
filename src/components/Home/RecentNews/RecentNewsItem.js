import { TbArrowNarrowRight } from 'react-icons/tb'

const RecentNewsItem = (props) => {
    return (
        <div className="flex flex-col justify-center items-center w-[380px] rounded-[10px] m-4">
            <img
                src={props.imgSrc}
                alt="cardImage"
                className="rounded-[10px] w-[380px] "
            />
            <div className="flex flex-col justify-center items-start w-[95%] rounded-[10px] p-3">
                <ul className="flex justify-between items-center w-full text-[.95rem] text-[#555555]">
                    <li className="flex justify-center items-center">
                        17/05/2023
                    </li>
                    <li className="flex justify-center items-center">
                        By Admin
                    </li>
                    <li className="flex justify-center items-center">
                        <img
                            src="https://html.merku.love/shelly/assets/img/icon13.png"
                            alt="badge"
                            className="mr-1"
                        />
                        Teachers, School
                    </li>
                </ul>
                <h4 className="text-[#333333] text-[1.4rem] font-semibold">
                    Campus clean workshop
                </h4>
                <p className="text-[.95rem] text-[#555555] font-normal my-1">
                    Nam mattis felis id sodales rutrum. Nulla ornare tristique
                    mauris, a laoreet erat ornare sit amet
                </p>
                <button className="flex justify-center items-center text-[#3770A8] text-[.9rem] font-[700] my-1">
                    Read
                    <TbArrowNarrowRight className="ml-1 text-[1.25rem]" />
                </button>
            </div>
        </div>
    )
}

export default RecentNewsItem
