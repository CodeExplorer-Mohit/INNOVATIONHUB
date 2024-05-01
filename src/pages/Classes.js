import HeadSection from '../UI/HeadSection/HeadSection'
import ClassesBanner from '../components/Classes/ClassesBanner/ClassesBanner'
import ClassesCards from '../components/Classes/ClassesCards/ClassesCards'
import JoinUs from '../components/JoinUs/JoinUs'

const Classes = () => {
    return (
        <>
            <HeadSection Head="Classes" SubHead="Classes" />
            <ClassesBanner />
            <ClassesCards />
            <JoinUs />
        </>
    )
}

export default Classes
