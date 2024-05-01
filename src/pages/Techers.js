import HeadSection from '../UI/HeadSection/HeadSection'
import JoinUs from '../components/JoinUs/JoinUs'
import TeachersCards from '../components/Teachers/TeachersCard'

const Teachers = () => {
    return (
        <>
            <HeadSection Head="Teachers" SubHead="Teachers" />
            <TeachersCards />
            <JoinUs />
        </>
    )
}

export default Teachers
