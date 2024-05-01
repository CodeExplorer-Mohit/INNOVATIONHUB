import BlogCardHead from './BlogCardHead'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const BlogCard = (props) => {
    return (
        <div className="flex flex-col justify-center items-start w-full group   ">
            <div className="flex justify-center items-center w-full relative">
                <span className="w-full h-full absolute left-0 top-0 bg-[rgba(0,0,0,0.0)] group-hover:bg-[rgba(0,0,0,0.3)] rounded-[20px] duration-500"></span>
                <img
                    src={props.ImgLink}
                    alt="img"
                    className="rounded-[20px] w-full"
                />
                <p className="translate-x-5 translate-y-[50%] text-[#222222] bg-[#FFD31D] px-3 rounded-[20px] absolute bottom-0 left-0">
                    English, Teachers, Shelly
                </p>
            </div>
            <div className="flex flex-col justify-center items-start w-full p-6">
                <ul className="flex justify-start items-center my-1">
                    <li className="flex justify-center items-center text-[#555555] text-[.95rem] mr-2">
                        17/09/2023
                    </li>
                    <li className="flex justify-center items-center text-[#555555] text-[.95rem] mx-2">
                        by Admin
                    </li>
                    <li className="flex justify-center items-center text-[#555555] text-[.95rem] ml-2">
                        <img
                            src="https://html.merku.love/shelly/assets/img/icon13.png"
                            alt="badge"
                            className="mr-1"
                        />
                        Teachers, School
                    </li>
                </ul>
                <BlogCardHead
                    Heading={props.Heading}
                    Description={props.Description}
                />
                <div className="flex justify-start items-center w-full my-1">
                    <button className="flex justify-ceneter items-center text-[#155799] font-[600]">
                        Read
                        <MdOutlineArrowRightAlt
                            size={25}
                            className="mt-1 ml-1"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
