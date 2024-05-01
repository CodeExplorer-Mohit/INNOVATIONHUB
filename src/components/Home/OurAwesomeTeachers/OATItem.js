import { HiPlus } from 'react-icons/hi'
import { GrFacebookOption } from 'react-icons/gr'
import { TiSocialLinkedin } from 'react-icons/ti'
import { AiOutlineInstagram } from 'react-icons/ai'

const OATItem = (props) => {
    return (
        <div className="flex flex-col justify-center items-center rounded-[20px] relative m-4">
            <img
                src={props.Src}
                alt="img"
                className="w-[270px] rounded-[20px] mb-3"
            />
            <p className="text-[#222222] text-[1.2rem] font-[600] w-full px-5">
                {props.TeacherName}
            </p>
            <p className="text-[.95rem] font-[600] text-[#155799] w-full px-5">
                {props.Role}
            </p>
            <div className="flex flex-col justify-center items-center absolute bottom-10 right-5 w-[40px] h-[40px] hover:h-[120px] rounded-[30px] bg-gradient-to-b to-[#f37335] from-[#fdc830] duration-200 group">
                <AiOutlineInstagram
                    size={20}
                    color="#FFFFFF"
                    className="hidden group-hover:flex absolute top-[15%] cursor-pointer"
                />
                <TiSocialLinkedin
                    size={20}
                    color="#FFFFFF"
                    className="hidden group-hover:flex absolute top-[35%] cursor-pointer"
                />
                <GrFacebookOption
                    size={20}
                    color="#FFFFFF"
                    className="hidden group-hover:flex absolute top-[55%] cursor-pointer bottom-3"
                />
                <HiPlus
                    size={20}
                    color="#FFFFFF"
                    className="flex absolute group-hover:top-[75%] cursor-pointer"
                />
            </div>
        </div>
    )
}

export default OATItem
