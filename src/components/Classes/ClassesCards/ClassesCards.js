import OurCalssesCarousel from '../../Home/OurClasses/OurCalssesCarousel'

const ClassesCards = () => {
    const classesCardsData = [
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/class1.jpg',
            title: 'Natural Sciences & Mathematics Courses',
            day: 'Mon-Fri',
            time: '10 AM-12 PM',
            userName: 'Amanda Kern',
            price: '67',
        },
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/class2.jpg',
            title: 'Environmental Studies & Earth Sciences',
            day: 'Mon-Fri',
            time: '10 AM-12 PM',
            userName: 'Gypsy Hardinge',
            price: '67',
        },
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/class3.jpg',
            title: 'Hospitality, Leisure & Sports Courses',
            day: 'Mon-Fri',
            time: '10 AM-12 PM',
            userName: 'Margje Jutten',
            price: '67',
        },
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/class4.jpg',
            title: 'Basic English Speaking and Grammar',
            day: 'Mon-Fri',
            time: '10 AM-12 PM',
            userName: 'Hubert Franck',
            price: '67',
        },
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/class5.jpg',
            title: 'Natural Sciences & Mathematics Courses',
            day: 'Mon-Fri',
            time: '10 AM-12 PM',
            userName: 'Gypsy Hardinge',
            price: '67',
        },
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/class6.jpg',
            title: 'Environmental Studies & Earth Sciences',
            day: 'Mon-Fri',
            time: '10 AM-12 PM',
            userName: 'Margje Jutten',
            price: '67',
        },
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/class7.jpg',
            title: 'Hospitality, Leisure & Sports Courses',
            day: 'Mon-Fri',
            time: '10 AM-12 PM',
            userName: 'Hubert Franck',
            price: '67',
        },
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/class8.jpg',
            title: 'Basic English Speaking and Grammar',
            day: 'Mon-Fri',
            time: '10 AM-12 PM',
            userName: 'Amanda Kern',
            price: '67',
        },
    ]
    return (
        <section className="flex justify-center items-center w-[100%]">
            <div className="flex flex-wrap justify-between items-center w-[80%]">
                {classesCardsData.map((item, index) => (
                    <OurCalssesCarousel
                        key={index}
                        ImgLink={item.imgLink}
                        Title={item.title}
                        Day={item.day}
                        Time={item.time}
                        UserName={item.userName}
                        Price={item.price}
                    />
                ))}
            </div>
        </section>
    )
}

export default ClassesCards
