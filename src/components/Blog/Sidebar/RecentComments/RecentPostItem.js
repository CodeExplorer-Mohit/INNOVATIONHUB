import { TbMessageDots } from 'react-icons/tb'

const RecentPostItem = (props) => {
    return (
        <li className="flex justify-center items-start w-full my-3">
            <div className="flex justify-center items-center ">
                <TbMessageDots color="#f6986b" size={24} />
            </div>
            <div className="flex justify-center items-start ml-2 ">
                <p className="text-[#333333] text-left leading-4 duration-300 hover:text-[#f6986b]">
                    <strong className="mr-1 font-[550]">
                        {props.AdminName}
                    </strong>
                    {props.Comment}
                </p>
            </div>
        </li>
    )
}

export default RecentPostItem
