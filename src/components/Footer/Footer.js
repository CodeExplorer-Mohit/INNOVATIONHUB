import { MdLocalPhone } from 'react-icons/md'
import { BiTime } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { GrFacebookOption } from 'react-icons/gr'
import { TiSocialLinkedin } from 'react-icons/ti'
import { AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="flex justify-center items-center w-[100%] h-[40%] bg-[#F2F7FD] pt-[28vh]">
            <div className="flex flex-col justify-center items-center w-[80%] h-full py-2">
                {' '}
                <div className="flex justify-between items-start w-full py-4">
                    <div className="flex flex-col justify-start items-start w-[30%]">
                        <img
                            src="https://html.merku.love/shelly/assets/img/01_Logo_2x.png"
                            alt="logo"
                            className="w-[170px] mb-2"
                        />
                        <p className="text-[#555555] mt-2">
                            Vivamus porta efficitur nibh nec convallis.
                            Vestibulum egestas eleifend justo. Ut tellus ipsum,
                            accumsan
                        </p>
                    </div>
                    <ul className="flex flex-col justify-start items-start w-[30%]">
                        <li className="flex justify-center items-start px-3 py-2">
                            <div className="flex justify-center items-center h-full">
                                <MdLocalPhone color="#f37335" size="23" />
                            </div>
                            <p className="flex flex-col justify-center items-start">
                                <span className="text-[#333333] font-[600] ml-1">
                                    Call
                                </span>
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
                                <span className="text-[#333333] font-[600] ml-1">
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
                                <span className="text-[#333333] font-[600] ml-1">
                                    Address
                                </span>
                                <span className="text-[.92rem] text-[#555555]">
                                    Franklin St, Greenpoint Ave
                                </span>
                            </p>
                        </li>
                    </ul>
                    <ul className="flex flex-col justify-start items-start w-[30%]">
                        <h3 className="text-[#333333] font-[550] text-[1.2rem] mb-2">
                            Quick Links
                        </h3>
                        <li className="flex justify-center items-start mt-2 text-[#555555] hover:text-[#1260A0] hover:translate-x-1 text-[.98rem] font-[520] duration-500 cursor-pointer">
                            <Link to="/about">AboutUs</Link>
                        </li>
                        <li className="flex justify-center items-start mt-2 text-[#555555] hover:text-[#1260A0] hover:translate-x-1 text-[.98rem] font-[520] duration-500 cursor-pointer">
                            <Link to="/classes">OurClasses</Link>
                        </li>
                        <li className="flex justify-center items-start mt-2 text-[#555555] hover:text-[#1260A0] hover:translate-x-1 text-[.98rem] font-[520] duration-500 cursor-pointer">
                            <Link to="/teachers">School Teachers</Link>
                        </li>
                        <li className="flex justify-center items-start mt-2 text-[#555555] hover:text-[#1260A0] hover:translate-x-1 text-[.98rem] font-[520] duration-500 cursor-pointer">
                            Recent Events
                        </li>
                        <li className="flex justify-center items-start mt-2 text-[#555555] hover:text-[#1260A0] hover:translate-x-1 text-[.98rem] font-[520] duration-500 cursor-pointer">
                            Our News
                        </li>
                        <li className="flex justify-center items-start mt-2 text-[#555555] hover:text-[#1260A0] hover:translate-x-1 text-[.98rem] font-[520] duration-500 cursor-pointer">
                            Schedule
                        </li>
                    </ul>
                </div>
                <span className="w-[100%] h-[1px] bg-[rgba(0,0,0,0.1)] my-2"></span>
                <div className="flex justify-between items-center w-full py-4">
                    <div className="flex justify-center items-center">
                        <p className="text-[#555555]">
                            © Copyrights 2020 Shelly All rights reserved
                        </p>
                    </div>
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
        </footer>
    )
}

export default Footer
