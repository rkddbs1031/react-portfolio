import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'hooks'

import Main from './Main'
import Projects from './Projects'
import ReactProjects from './Projects/Reacts'
import WebProjects from './Projects/Webs'
import ScriptProjects from './Projects/Scripts'
import AnimationProjects from './Projects/Animations'
import About from './About'
import Contact from './Contact'
import './routes.module.scss'

const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='projects' element={<Outlet />}>
        <Route path='' element={<Projects />} />
        <Route path='react' element={<ReactProjects />} />
        <Route path='web' element={<WebProjects />} />
        <Route path='script' element={<ScriptProjects />} />
        <Route path='animation' element={<AnimationProjects />} />
      </Route>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
  )
}
export default App
