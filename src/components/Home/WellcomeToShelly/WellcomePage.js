import WellcomeCardItem from './WellcomeCardItem'

const WellcomePage = () => {
    const cardData = [
        {
            icon: 'https://html.merku.love/shelly/assets/img/icon5.png',
            title: 'Awesome Teachers',
            text: 'Vivamus interdum, mauris interdum quis curdum sodales',
        },
        {
            icon: 'https://html.merku.love/shelly/assets/img/icon7.png',
            title: 'Global Certificate',
            text: 'Pelleneget tespharetra que fringilla egugue id eget pharetra',
        },
        {
            icon: 'https://html.merku.love/shelly/assets/img/icon8.png',
            title: 'Best Programm',
            text: 'Etiam risus neque, volutpat vel laoreet a, finibus volutpat non',
        },
        {
            icon: 'https://html.merku.love/shelly/assets/img/icon9.png',
            title: 'Student Support Service',
            text: 'Mauris nec mi fequis ugiat, cursus tortor nec, pharetra tellus',
        },
    ]
    return (
        <section className="flex justify-center items-center w-[100%] min-h-[50%] py-10">
            <div className="flex flex-col justify-center items-center w-[80%] h-full py-2">
                <div className="flex flex-col justify-center items-center w-full">
                    <h2 className="text-[3rem] text-[#2B2B2B] font-[800] my-2 w-[40%] text-center leading-[55px]">
                        Wellcome to
                        <span className="text-[#F37335] ml-2">Shelly</span>
                    </h2>
                    <p className="text-[#555555] w-[40%] text-center my-2">
                        Nunc consectetur ex nunc, id porttitor leo semper eget.
                        Vivamus interdum, mauris quis cursus sodales, urn
                    </p>
                </div>
                <div className="flex justify-center items-center w-full py-5">
                    {cardData.map((item) => (
                        <WellcomeCardItem
                            Icon={item.icon}
                            Title={item.title}
                            Text={item.text}
                        />
                    ))}
                </div>
                <div className="flex justify-center items-center w-full mt-10">
                    <ul className="flex justify-center items-center h-[600px] w-full relative">
                        <img
                            src="https://html.merku.love/shelly/assets/img/sec-bg.png"
                            alt=""
                            className="w-[60px] absolute top-5 left-5"
                        />
                        <li className="flex justify-center items-center rounded-[20px] w-[180px] h-[210px] absolute left-[0px] top-[140px]">
                            <img
                                src="https://html.merku.love/shelly/assets/img/gallery1.jpg"
                                alt="img"
                                className="rounded-[20px] w-[100%] h-[100%] object-cover"
                            />
                        </li>
                        <li className="flex justify-center items-center rounded-[20px] w-[270px] h-[360px] absolute left-[199px] top-[-30px]">
                            <img
                                src="https://html.merku.love/shelly/assets/img/gallery2.jpg"
                                alt="img"
                                className="rounded-[20px] w-[100%] h-[100%] object-cover"
                            />
                        </li>
                        <li className="flex justify-center items-center rounded-[20px] w-[170px] h-[290px] absolute left-[496px] top-[0px]">
                            <img
                                src="https://html.merku.love/shelly/assets/img/gallery4.jpg"
                                alt="img"
                                className="rounded-[20px] w-[100%] h-[100%] object-cover"
                            />
                        </li>
                        <li className="flex justify-center items-center rounded-[20px] w-[90px] h-[80px] absolute left-[693px] top-[70px]">
                            <img
                                src="https://html.merku.love/shelly/assets/img/gallery6.jpg"
                                alt="img"
                                className="rounded-[20px] w-[100%] h-[100%] object-cover"
                            />
                        </li>
                        <li className="flex justify-center items-center rounded-[20px] w-[250px] h-[190px] absolute left-[873px] top-[0px]">
                            <img
                                src="https://html.merku.love/shelly/assets/img/gallery8.jpg"
                                alt="img"
                                className="rounded-[20px] w-[100%] h-[100%] object-cover"
                            />
                        </li>
                        <li className="flex justify-center items-center rounded-[20px] w-[180px] h-[190px] absolute left-[230px] top-[349px]">
                            <img
                                src="https://html.merku.love/shelly/assets/img/gallery3.jpg"
                                alt="img"
                                className="rounded-[20px] w-[100%] h-[100%] object-cover"
                            />
                        </li>
                        <li className="flex justify-center items-center rounded-[20px] w-[80px] h-[70px] absolute left-[490px] top-[310px]">
                            <img
                                src="https://html.merku.love/shelly/assets/img/gallery5.jpg"
                                alt="img"
                                className="rounded-[20px] w-[100%] h-[100%] object-cover"
                            />
                        </li>
                        <li className="flex justify-center items-center rounded-[20px] w-[170px] h-[240px] absolute left-[885px] top-[210px]">
                            <img
                                src="https://html.merku.love/shelly/assets/img/gallery7.jpg"
                                alt="img"
                                className="rounded-[20px] w-[100%] h-[100%] object-cover"
                            />
                        </li>
                        <li className="flex justify-center items-center rounded-[20px] w-[170px] h-[240px] absolute left-[693px] top-[170px]">
                            <img
                                src="https://html.merku.love/shelly/assets/img/gallery9.jpg"
                                alt="img"
                                className="rounded-[20px] w-[100%] h-[100%] object-cover"
                            />
                        </li>
                        <li className="flex justify-center items-center rounded-[20px] w-[60px] h-[65px] absolute  left-[1075px] top-[210px]">
                            <img
                                src="https://html.merku.love/shelly/assets/img/gallery10.jpg"
                                alt="img"
                                className="rounded-[20px] w-[100%] h-[100%] object-cover"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WellcomePage
