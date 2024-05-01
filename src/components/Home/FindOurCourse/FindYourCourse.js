import { CgPhone } from 'react-icons/cg'

import FUCItem from './FUCItem'

const FindYourCourse = () => {
    return (
        <section className="flex justify-center items-center w-[100%] min-h-[50%] py-10">
            <div className="flex flex-col justify-center items-center w-[80%] h-full py-2">
                <div className="flex flex-col justify-center items-start w-full">
                    <h2 className="text-[3.2rem] text-[#2B2B2B] font-[800] my-1 w-full text-left">
                        Find Your Course
                    </h2>
                </div>
                <div className="flex justify-center items-start w-full">
                    <div className="flex flex-col justify-center items-center w-1/2">
                        <div className="flex flex-col justify-center items-start">
                            <p className="text-[#555555] w-[90%] text-left my-2">
                                ullam fringilla ipsum sed enim scelerisque, ac
                                porttitor libero egestas. Donec iaculis nisi
                                eget bibendum efficitur. Lorem ipsum dolor sit
                            </p>
                            <p className="flex justify-center items-center my-2">
                                <CgPhone className="text-[#F79942] text-[1.6rem]" />
                                <span className="text-[1.25rem] text-[#155799] ml-2">
                                    Call:{' '}
                                    <span className="font-[900]">
                                        +2 342 5446 67
                                    </span>
                                </span>
                            </p>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <div className="flex justify-center items-center w-[100%] relative">
                                <img
                                    src="https://html.merku.love/shelly/assets/img/course-img.png"
                                    alt="left-pic"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-1/2">
                        <FUCItem />
                        <FUCItem Style="relative left-[-15%]" />
                        <FUCItem />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FindYourCourse
