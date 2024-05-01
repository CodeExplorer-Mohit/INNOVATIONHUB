import OATItem from '../Home/OurAwesomeTeachers/OATItem'
import TeachersPagination from './TeachersPagination'

const TeachersCards = () => {
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
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/teacher5.jpg',
            teacherName: 'Polina Kerston',
            role: 'Dai Jiang',
        },
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/teacher6.jpg',
            teacherName: 'Hubert Franck',
            role: 'Instructor',
        },
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/teacher7.jpg',
            teacherName: 'Vincent Luggers',
            role: 'Art Teacher',
        },
        {
            imgLink: 'https://html.merku.love/shelly/assets/img/teacher8.jpg',
            teacherName: 'Masood El Toure',
            role: 'Teacher',
        },
    ]
    return (
        <section className="flex justify-center items-center w-[100%] mt-10 py-10">
            <div className="flex flex-wrap justify-center items-center w-[80%]">
                {OATData.map((item, index) => (
                    <OATItem
                        key={index}
                        Src={item.imgLink}
                        TeacherName={item.teacherName}
                        Role={item.role}
                    />
                ))}
                <TeachersPagination />
            </div>
        </section>
    )
}

export default TeachersCards
