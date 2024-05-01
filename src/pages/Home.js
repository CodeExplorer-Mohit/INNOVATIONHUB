import FindYourCourse from '../components/Home/FindOurCourse/FindYourCourse'
import LandingSection from '../components/Home/LandingSection/LandingSection'
import OurAwesomeTeachers from '../components/Home/OurAwesomeTeachers/OurAwesomeTeachers'
import OurClasses from '../components/Home/OurClasses/OurClasses'
import RecentNews from '../components/Home/RecentNews/RecentNews'
import WellcomePage from '../components/Home/WellcomeToShelly/WellcomePage'
import JoinUs from '../components/JoinUs/JoinUs'
const Home = () => {
    return (
        <>
            <LandingSection />
            <WellcomePage />
            <OurClasses />
            <OurAwesomeTeachers />
            <FindYourCourse />
            <RecentNews />
            <JoinUs />
        </>
    )
}

export default Home
