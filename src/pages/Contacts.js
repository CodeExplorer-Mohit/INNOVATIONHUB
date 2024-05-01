import HeadSection from '../UI/HeadSection/HeadSection'
import ContactsForm from '../components/Contacts/ContactsForm'
import MapSection from '../components/Contacts/MapSection'
import JoinUs from '../components/JoinUs/JoinUs'

const Contacts = () => {
    return (
        <>
            <HeadSection Head="Contacts" SubHead="Contacts" />
            <MapSection />
            <ContactsForm />
            <JoinUs />
        </>
    )
}

export default Contacts
