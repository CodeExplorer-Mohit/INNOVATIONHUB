import Button from '../../UI/Button/Button'

const JoinUs = () => {
    return (
        <section className="flex justify-center items-center w-[100%] translate-y-[50%]">
            <div className="flex justify-center items-center w-[80%] h-[38vh] bg-gradient-to-r to-[#f37335] from-[#fdc830] rounded-[30px] relative overflow-hidden">
                <div className="flex flex-col justify-center items-start w-[30%]">
                    <h2 className="text-[2.2rem] text-[#2B2B2B] font-[900] leading-10 mb-5">
                        Join us <br />
                        and stay tuned!
                    </h2>

                    <Button OnClickHandler={2} Text="Join Us" />
                </div>
                <div className="flex flex-col justify-center items-center w-[50%]">
                    <form
                        // onSubmit=""
                        className="flex flex-col justify-center items-center w-[100%]"
                    >
                        <div className="flex justify-between items-center w-full my-2">
                            <input
                                placeholder="Message"
                                className="focus:text-[rgba(#555555)] outline-none rounded-[20px] bg-[#fddead] w-[32%] px-4 py-2"
                                // value=""
                                // onChange=""
                            />
                            <input
                                placeholder="Message"
                                className="focus:text-[rgba(#555555)] outline-none rounded-[20px] bg-[#fddead] w-[32%] px-4 py-2"
                                // value=""
                                // onChange=""
                            />
                            <select className="focus:text-[rgba(#555555)] outline-none rounded-[20px] bg-[#fddead] w-[32%] px-4 py-2">
                                <option className="text-[#222222]">
                                    class1
                                </option>
                                <option className="text-[#222222]">
                                    class2
                                </option>
                                <option className="text-[#222222]">
                                    class3
                                </option>
                                <option className="text-[#222222]">
                                    class4
                                </option>
                                <option className="text-[#222222]">
                                    class5
                                </option>
                            </select>
                        </div>
                        <div className="flex justify-center items-center w-full my-2">
                            <textarea
                                placeholder="Message"
                                className={`outline-none rounded-[20px] bg-[#fddead] min-h-[80px] w-[100%] px-4 py-2 `}
                                // value=""
                                // onChange=""
                            />
                        </div>
                    </form>
                </div>

                <div className="w-full h-full absolute ">
                    <img
                        src="https://html.merku.love/shelly/assets/img/news-bg.png"
                        alt="bg-png left"
                        className="absolute bottom-10 left-0"
                    />
                    <img
                        src="https://html.merku.love/shelly/assets/img/circle5.png"
                        alt="bg-png right"
                        className="absolute bottom-5 right-[-.5%]"
                    />
                </div>
            </div>
        </section>
    )
}

export default JoinUs
