import { Link } from 'react-router-dom'
import { MdLocalPhone } from 'react-icons/md'
import { BiTime } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { GrFacebookOption } from 'react-icons/gr'
import { TiSocialLinkedin } from 'react-icons/ti'
import { AiOutlineInstagram } from 'react-icons/ai'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center w-[100%] h-[40%] bg-transparent">
            <div className="flex flex-col justify-center items-center w-[80%] h-full py-2">
                <div className="flex justify-between items-center w-full py-4">
                    <div className="flex justify-center items-center w-[15%]">
                        <img
                            src="https://html.merku.love/shelly/assets/img/01_Logo_2x.png"
                            alt="logo"
                            className="w-[180px]"
                        />
                    </div>
                    <ul className="flex justify-between items-center w-[55%]">
                        <li className="flex justify-center items-start px-3 py-2">
                            <div className="flex justify-center items-center h-full">
                                <MdLocalPhone color="#f37335" size="23" />
                            </div>
                            <p className="flex flex-col justify-center items-start">
                                <span className="font-[600] ml-1">Call</span>
                                <span className="text-[.92rem] text-[#555555]">
                                    +2 342 5446 67
                                </span>
                            </p>
                        </li>
                        <li className="flex justify-center items-start px-3 py-2">
                            <div className="flex justify-center items-center h-full">
                                <BiTime color="#f37335" size="23" />
                            </div>
                            <p className="flex flex-col justify-center items-start">
                                <span className="font-[600] ml-1">
                                    Work Time
                                </span>
                                <span className="text-[.92rem] text-[#555555]">
                                    Mon - Fri 8 AM - 5 PM
                                </span>
                            </p>
                        </li>
                        <li className="flex justify-center items-start px-3 py-2">
                            <div className="flex justify-center items-center h-full">
                                <MdLocationOn color="#f37335" size="24" />
                            </div>
                            <p className="flex flex-col justify-center items-start">
                                <span className="font-[600] ml-1">Address</span>
                                <span className="text-[.92rem] text-[#555555]">
                                    Franklin St, Greenpoint Ave
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
                <span className="w-[100%] h-[1px] bg-[rgba(0,0,0,0.1)] my-2"></span>
                <div className="flex justify-between items-center w-full py-4">
                    <ul className="flex justify-between items-center w-[50%]">
                        <li
                            className={`flex justify-center items-center text-[1.28rem] font-[600] text-[#333333]  ${classes.menu_link_hover_effect}`}
                        >
                            <Link to="/">Home</Link>
                        </li>
                        <li
                            className={`flex justify-center items-center text-[1.28rem] font-[600] text-[#333333]    ${classes.menu_link_hover_effect}`}
                        >
                            <Link to="/about">About</Link>
                        </li>
                        <li
                            className={`flex justify-center items-center text-[1.28rem] font-[600] text-[#333333] ${classes.menu_link_hover_effect}`}
                        >
                            <Link to="/classes">Classes</Link>
                        </li>
                        <li
                            className={`flex justify-center items-center text-[1.28rem] font-[600] text-[#333333] ${classes.menu_link_hover_effect}`}
                        >
                            <Link to="/teachers">Teachers</Link>
                        </li>
                        <li
                            className={`flex justify-center items-center text-[1.28rem] font-[600] text-[#333333] ${classes.menu_link_hover_effect}`}
                        >
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li
                            className={`flex justify-center items-center text-[1.28rem] font-[600] text-[#333333] ${classes.menu_link_hover_effect}`}
                        >
                            <Link to="/contacts">Contacts</Link>
                        </li>
                    </ul>
                    <ul className="flex justify-center items-center">
                        <li className="flex justify-center items-center bg-[#1260A0] mx-2 p-1 rounded-[50%] hover:scale-[1.1] duration-300">
                            <GrFacebookOption
                                size="22"
                                className="text-[#FFFFFF]"
                            />
                        </li>
                        <li className="flex justify-center items-center bg-[#1260A0] mx-2 p-1 rounded-[50%] hover:scale-[1.1] duration-300">
                            <TiSocialLinkedin
                                size="24"
                                className="text-[#FFFFFF]"
                            />
                        </li>
                        <li className="flex justify-center items-center bg-[#1260A0] mx-2 p-1 rounded-[50%] hover:scale-[1.1] duration-300">
                            <AiOutlineInstagram
                                size="23"
                                className="text-[#FFFFFF]"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
