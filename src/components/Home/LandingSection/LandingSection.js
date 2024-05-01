import { FaSearch } from 'react-icons/fa'

const LandingSection = () => {
    let translateX
    let translateY
    return (
        <section className="flex justify-center items-center w-[100%] min-h-[50%] py-10 my-[10vh] relative">
            <div className="flex justify-center items-center w-[80%] h-full py-2 relative">
                <span className="absolute left-[-10%] text-[#F37335] text-[10rem] font-[900] tracking-wide z-[-1] opacity-[.1]">
                    Shelly
                </span>
                <div className="flex flex-col justify-center items-start w-1/2">
                    <p className="text-[4rem] text-[#2B2B2B] text-left font-[800] relative z-[10] mb-3">
                        The Smarter Way to Learn
                        <span className="text-[#F37335] ml-4">
                            <u>Anything</u>
                        </span>
                    </p>
                    <p className="text-[#555555] text-left my-3">
                        Mauris malesuada enim eget blandit gravida. Duis
                        hendrerit cursus turpis, id mollis est rutrum nec. Sed
                        interdum nisi id libero tincidunt, sit amet vestibulum
                        tortor porttitor. Cras ligula lacus, ullamcorper sed
                    </p>
                    <div className="flex justify-center items-center relative mt-10">
                        <span className="absolute right-[-3%] z-[35]">
                            <img
                                src="https://html.merku.love/shelly/assets/img/circle1.png"
                                alt="circle"
                            />
                        </span>
                        <div className="bg-[#FFFFFF] flex justify-center items-center border rounded-[30px] relative z-[40]">
                            <input
                                type="search"
                                placeholder="search class"
                                className="bg-[#FFFFFF] w-[450px] h-[50px] px-4 focus:outline-none rounded-[30px] focus:text-[#555555] relative z-[40]"
                            />
                            <button>
                                <FaSearch
                                    color="#1C5C9C"
                                    size={18}
                                    className="mr-5"
                                />
                            </button>
                            <span className="absolute left-[3%] top-0 translate-y-[-40%] z-[35]">
                                <img
                                    src="https://html.merku.love/shelly/assets/img/circle.png"
                                    alt="blue circle"
                                />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-1/2 relative h-[536px]">
                    <span
                        className={`flex justify-center items-center w-full absolute translate-x-${translateX} translate-y-${translateY}`}
                    >
                        <img
                            src="https://html.merku.love/shelly/assets/img/elements.png"
                            alt=""
                            className="w-[536px]"
                        />
                    </span>
                    <ul className="flex justify-center items-center w-full h-full">
                        <li className="flex justify-center items-center absolute left-[10%] top-[-10%]">
                            <img
                                src="https://m.media-amazon.com/images/I/71QJ+3AA+ML._AC_SX522_.jpg"
                                alt="landing_pic_1"
                                className="w-[250px] rounded-[50%]"
                            />
                        </li>
                        <li className="flex justify-center items-center absolute left-[60%] top-[40%]">
                            <img
                                src="https://m.media-amazon.com/images/I/71QJ+3AA+ML._AC_SX522_.jpg"
                                alt="landing_pic_1"
                                className="w-[200px] rounded-[50%]"
                            />
                        </li>
                        <li className="flex justify-center items-center absolute left-[30%] top-[55%]">
                            <img
                                src="https://m.media-amazon.com/images/I/71QJ+3AA+ML._AC_SX522_.jpg"
                                alt="landing_pic_1"
                                className="w-[140px] rounded-[50%]"
                            />
                        </li>
                        <li className="flex justify-center items-center absolute left-[60%] top-[90%]">
                            <img
                                src="https://m.media-amazon.com/images/I/71QJ+3AA+ML._AC_SX522_.jpg"
                                alt="landing_pic_1"
                                className="w-[100px] rounded-[50%]"
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <span className="flex justify-center items-center absolute right-0 bottom-[10%] z-[-1]">
                <img
                    src="https://html.merku.love/shelly/assets/img/banner-bg.png"
                    alt="circle"
                    className="w-[100%]"
                />
            </span>
        </section>
    )
}

export default LandingSection
