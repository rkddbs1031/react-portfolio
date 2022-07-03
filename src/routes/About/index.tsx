import AboutMain from './AboutMain'
import AboutMe from './AboutMe'
import AboutKeyword from './AboutKeyword'
import Footer from 'routes/_components/Footer'

const About = () => {
  return (
    <>
      <AboutMain />
      <AboutMe />
      <AboutKeyword />
      <Footer path='about' />
    </>
  )
}
export default About
