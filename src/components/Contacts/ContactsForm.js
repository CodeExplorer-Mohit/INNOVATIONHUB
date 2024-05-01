import Button from '../../UI/Button/Button'

const ContactsForm = () => {
    return (
        <section className="flex justify-center items-center w-[100%] mt-10">
            <div className="flex justify-center items-center w-[80%]">
                <div className="flex flex-col justify-center items-start w-[70%]">
                    <h3 className="text-left text-[#222222] text-[2.5rem] font-[600] w-full">
                        Add Comment
                    </h3>
                    <form
                        // onSubmit={2}
                        className="flex flex-col justify-center items-start w-full"
                    >
                        <div className="flex justify-start items-center w-full my-3">
                            <input
                                placeholder="Name"
                                className="rounded-[30px] w-[46%] h-[40px] border focus:outline-none px-4 mr-3"
                            />
                            <input
                                placeholder="Name"
                                className="rounded-[30px] w-[46%] h-[40px] border focus:outline-none px-4 ml-3"
                            />
                        </div>
                        <div className="flex justify-start items-center w-full my-3">
                            <textarea
                                placeholder="Message"
                                className="border focus:outline-none rounded-[20px] p-3 w-[95%] h-[100px]"
                            ></textarea>
                        </div>
                        <div className="flex justify-end items-center ">
                            <Button Text="Send Now" />
                        </div>
                    </form>
                </div>
                <div className="flex flex-col justify-center items-start w-[30%]">
                    <h3 className="text-left text-[#222222] text-[2.5rem] font-[600] w-full">
                        Our Contacts
                    </h3>
                    <ul className="flex flex-col justify-center items-start w-full">
                        <li className="flex justify-start items-center w-full my-3">
                            <img
                                src="https://html.merku.love/shelly/assets/img/icon15.png"
                                alt="icons"
                                className="mr-3"
                            />
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-[#222222]">Call</p>
                                <p className="text-[#222222]">+2 342 5446 67</p>
                            </div>
                        </li>
                        <li className="flex justify-start items-center w-full my-3">
                            <img
                                src="https://html.merku.love/shelly/assets/img/icon16.png"
                                alt="icons"
                                className="mr-3"
                            />
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-[#222222]">Work Time</p>
                                <p className="text-[#222222]">
                                    Mon - Fri 8 AM - 5 PM
                                </p>
                            </div>
                        </li>
                        <li className="flex justify-start items-center w-full my-3">
                            <img
                                src="https://html.merku.love/shelly/assets/img/icon17.png"
                                alt="icons"
                                className="mr-3"
                            />
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-[#222222]">Address</p>
                                <p className="text-[#222222]">
                                    Franklin St, Greenpoint Ave
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ContactsForm
