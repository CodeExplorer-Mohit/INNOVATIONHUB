import { FaArrowCircleRight } from 'react-icons/fa'

const Button = (props) => {
    return (
        <button
            onClick={props.OnBtnClick}
            className="flex justify-center items-center w-[190px] h-[40px] font-[700] text-[1.2rem] text-[#FFFFFF] bg-[#1260a0] hover:bg-[#F37335] duration-300 rounded-[30px] px-2 mt-5 relative outline-none border-none cursor-pointer"
        >
            {props.Text}
            <FaArrowCircleRight className="text-[2rem] absolute left-1" />
        </button>
    )
}

export default Button
