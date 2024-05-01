import { CgPen } from 'react-icons/cg'

const OurMissionSection = () => {
    return (
        <section className="flex justify-center items-center w-[100%] py-10">
            <div className="flex justify-between items-center w-[80%] py-2">
                <div className="flex flex-col justify-center items-start w-1/2">
                    <div className="flex justify-center items-center">
                        <img
                            src="https://html.merku.love/shelly/assets/img/abt2.png"
                            alt="img"
                            className="rounded-[0%]"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-1/2">
                    <p className="text-[.9rem] font-[600] text-[#F37335]">
                        ABOUT US
                    </p>
                    <h2 className="text-[3rem] text-[#2B2B2B] font-[800] mb-2 w-[70%] text-left leading-[55px]">
                        Our Mission
                    </h2>
                    <p className="text-[#555555] w-[95%] text-left mt-2 mb-3">
                        Praesent rhoncus justo erat, sed sollicitudin arcu
                        malesuada vel. Etiam scelerisque justo ut purus luctus
                        ullamcorper. Vivamus vitae elit ligula. Fusce eu rutrum
                        nisl.
                    </p>
                    <ul className="flex flex-col justify-center items-start my-2">
                        <li className="flex justify-center items-center">
                            <CgPen size={20} color="#F37335" className="mr-2" />
                            <p className="text-[#555555] w-[95%] text-left">
                                Etiam ante nisl, maximus vitae sem non,
                                dignissim
                            </p>
                        </li>
                        <li className="flex justify-center items-center">
                            <CgPen size={20} color="#F37335" className="mr-2" />
                            <p className="text-[#555555] w-[95%] text-left">
                                Donec blandit, sapien eu porttitor blandit
                            </p>
                        </li>
                        <li className="flex justify-center items-center">
                            <CgPen size={20} color="#F37335" className="mr-2" />
                            <p className="text-[#555555] w-[95%] text-left">
                                Sed at urna at massa viverra feugiat non
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default OurMissionSection
