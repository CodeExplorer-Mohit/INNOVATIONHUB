import { FaRegCalendarAlt } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

const FUCItem = (props) => {
    return (
        <div
            className={`flex justify-center items-center w-[90%] shadow-[0_0_10px_rgba(0,0,0,0.05)] rounded-[10px] border-l-[6px] border-l-[#F79942] p-5 my-4 ${props.Style}`}
        >
            <ul className="flex flex-col justify-center items-start w-[100%]">
                <li className="flex justify-between items-center w-[100%] my-1">
                    <ul className="flex justify-between items-center w-[]">
                        <li className="flex justify-center items-center mr-3">
                            <FaRegCalendarAlt className="text-[#F79942] text-[1.25rem]" />
                        </li>
                        <li className="flex justify-center items-center mr-3">
                            29/07/2020
                        </li>
                        <li className="flex justify-center items-center mr-3">
                            11AM to 15PM
                        </li>
                    </ul>
                    <span className="text-[1.25rem] text-[#155799] font-[700]">
                        Free
                    </span>
                </li>
                <li className="flex justify-center items-center w-[100%] my-1">
                    <p className="text-[1.4rem] text-[#333333] font-[600] w-full text-left">
                        Digital Transformation Conference
                    </p>
                </li>
                <li className="flex justify-between items-center w-[100%] my-1">
                    <div className="flex justify-center items-center">
                        <img src="" alt="userPic" />
                        <p className="text-[.95rem] text-[#555555]">
                            Amanda Kern
                        </p>
                    </div>
                    <div className="flex justify-center items-center my-1">
                        <MdLocationOn className="text-[#F79942] text-[1rem] mr-1" />
                        <p className="text-[.95rem] text-[#555555]">
                            43 castle road 517 district
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default FUCItem
