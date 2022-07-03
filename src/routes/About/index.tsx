import AboutMain from './AboutMain'
import AboutMe from './AboutMe'
import AboutKeyword from './AboutKeyword'
import Footer from 'routes/_components/Footer'
import Header from 'routes/_components/Header'

const About = () => {
  return (
    <>
      <Header keyword='about' />
      <AboutMain />
      <AboutMe />
      <AboutKeyword />
      <Footer path='about' />
    </>
  )
}
export default About
