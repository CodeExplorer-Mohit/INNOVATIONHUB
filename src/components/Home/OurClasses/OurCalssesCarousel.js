import { FaUserCircle } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'

const OurCalssesCarousel = (props) => {
    return (
        <div className="flex flex-col justify-start items-center rounded-[10px] w-[280px] my-4 border">
            <img
                src={props.ImgLink}
                alt="imglink"
                className="w-[280px] h-[180px] rounded-t-[10px]"
            />
            <div className="flex flex-col justify-center items-start w-full p-4 relative border-t-4 border-t-[#3770A8]">
                <span className="flex justify-center items-center rounded-[50%] p-5 absolute top-[-15%] right-5 bg-gradient-to-b to-[#f37335] from-[#fdc830]">
                    <FaShoppingCart color="#FFFFFF" className="absolute" />
                </span>
                <p className="text-[#222222] text-[1.2rem] font-[600] leading-[25px] my-2">
                    {props.Title}
                </p>
                <div className="flex justify-start items-center w-full my-2">
                    <p className="text-[#555555] text-[.9rem] mr-1">
                        {props.Day}
                    </p>
                    <p className="text-[#555555] text-[.9rem] ml-1">
                        {props.Time}
                    </p>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="flex justify-start items-center w-full my-2">
                        <FaUserCircle size="25" color="#555555" />
                        <p className="text-[.95rem] text-[#555555] font-[600] ml-2">
                            {props.UserName}
                        </p>
                    </div>
                    <p className="text-[1.1rem] text-[#3770A8] font-[800]">
                        ${props.Price}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurCalssesCarousel
