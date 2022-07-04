import Header from 'routes/_components/Header'
import ContactMain from './ContactMain'
import ContactInfo from './ContactInfo'
import Footer from 'routes/_components/Footer'

const Contact = () => {
  return (
    <>
      <Header keyword='contact' />
      <ContactMain />
      <ContactInfo />
      <Footer path='contact' />
    </>
  )
}
export default Contact
