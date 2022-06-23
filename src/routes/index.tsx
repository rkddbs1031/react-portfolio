import { Routes, Route, Outlet } from 'react-router-dom'

import Header from './_components/Header'
import Main from './Main'
import Projects from './Projects'
import ReactProjects from './ReactProjects'
import WebProjects from './WebProjects'
import ScriptProjects from './ScriptProjects'
import AnimationProjects from './AnimationProjects'
import About from './About'
import './routes.module.scss'

const App = () => {
  return (
    <>
      <Header />
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
      </Routes>
    </>
  )
}
export default App
