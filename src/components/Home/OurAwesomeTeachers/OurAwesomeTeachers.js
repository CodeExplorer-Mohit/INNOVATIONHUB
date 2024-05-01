import OATItem from './OATItem'

const OurAwesomeTeachers = () => {
    const OATData = [
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/img5.jpg',
            teacherName: 'Polina Kerston',
            role: 'English Teacher',
        },
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/img6.jpg',
            teacherName: 'Faadi Al Rahman',
            role: 'Instructor',
        },
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/img7.jpg',
            teacherName: 'Chikelu Obasea',
            role: 'Art Teacher',
        },
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/img8.jpg',
            teacherName: 'Katayama Fumiki',
            role: 'Teacher',
        },
    ]

    return (
        <section className="flex justify-center items-center w-[100%] min-h-[50%] py-10">
            <div className="flex flex-col justify-center items-center w-[80%] h-full py-2">
                <div className="flex flex-col justify-center items-center w-full">
                    <h2 className="text-[3rem] text-[#2B2B2B] font-[800] my-2 w-[40%] text-center leading-[55px]">
                        Our Awesome Teachers
                    </h2>
                    <p className="text-[#555555] w-[50%] text-center my-2">
                        Quisque id ultrices tellus, ac sodales ex. Cras nec ante
                        viverra, bibendum justo eget, lacinia dui. Donec ligula
                        ligula, elementum sit amet
                    </p>
                </div>
                <div className="flex justify-center items-center w-full">
                    {OATData.map((item, index) => (
                        <OATItem
                            key={index}
                            Src={item.imgLink}
                            TeacherName={item.teacherName}
                            Role={item.role}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurAwesomeTeachers
