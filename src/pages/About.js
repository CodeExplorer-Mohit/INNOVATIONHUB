import JoinUs from '../components/JoinUs/JoinUs'
import HeadSection from '../UI/HeadSection/HeadSection'
import OurBenifits from '../components/About/OurBenifits/OurBenifits'
import OurMissionSection from '../components/About/OurMission/OurMissionSection'
import WellcomeShelly from '../components/About/WellcomeSection/WellcomeShelly'
import OurClasses from '../components/Home/OurClasses/OurClasses'

const About = () => {
    return (
        <>
            <HeadSection Head="About" SubHead="About" />
            <WellcomeShelly />
            <OurMissionSection />
            <OurBenifits />
            <OurClasses />
            <JoinUs />
        </>
    )
}

export default About
