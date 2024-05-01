import Button from '../../../UI/Button/Button'
import OurCalssesCarousel from './OurCalssesCarousel'

const OurClasses = () => {
    const cardData = [
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/img2.jpg',
            title: 'Natural Sciences & Mathematics Courses',
            day: 'Mon-Fri',
            time: '10 AM-12 PM',
            userName: 'Gypsy Hardinge',
            price: '67',
        },
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/img3.jpg',
            title: 'Environmental Studies & Earth Sciences',
            day: 'Mon-Fri',
            time: '10 AM-12 PM',
            userName: 'Margje Jutten',
            price: '67',
        },
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/img4.jpg',
            title: 'Hospitality, Leisure & Sports Courses',
            day: 'Mon-Fri',
            time: '10 AM-12 PM',
            userName: 'Hubert Franck',
            price: '67',
        },
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/img1.jpg',
            title: 'Basic English Speaking and Grammar',
            day: 'Mon-Fri',
            time: '10 AM-12 PM',
            userName: 'Amanda Kern',
            price: '67',
        },
    ]

    const BtnHandler = () => {}
    return (
        <section className="flex justify-center items-center w-[100%] min-h-[50%] py-10">
            <div className="flex flex-col justify-center items-center w-[80%] h-full py-2">
                <div className="flex flex-col justify-center items-start w-full">
                    <div className="flex justify-start items-center my-2 w-[40%] relative">
                        <p className="text-[3rem] text-[#2B2B2B] text-left font-[800] relative z-[10]">
                            Our Classes
                        </p>
                        <img
                            src="https://html.merku.love/shelly/assets/img/sec-bg.png"
                            alt="bg-Pic"
                            className="absolute left-[-15%] top-[-50%] z-[9]"
                        />
                    </div>
                    <p className="text-[#555555] w-[45%] text-left my-1">
                        Nam mattis felis id sodales rutrum. Nulla ornare
                        tristique mauris, a laoreet erat ornare sit amet. Nulla
                        sagittis faucibus lacus
                    </p>
                </div>
                <div className="flex justify-between items-center my-2 w-full">
                    {cardData.map((item) => (
                        <OurCalssesCarousel
                            ImgLink={item.imgLink}
                            Title={item.title}
                            Day={item.day}
                            Time={item.time}
                            UserName={item.userName}
                            Price={item.price}
                        />
                    ))}
                </div>
                <div className="flex justify-center items-center w-full">
                    <Button OnClickHandler={BtnHandler} Text="Classes" />
                </div>
            </div>
        </section>
    )
}

export default OurClasses
