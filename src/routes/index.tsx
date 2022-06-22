import { Routes, Route, Outlet } from 'react-router-dom'

import { useEffect } from 'hooks'
import Header from './_components/Header'
import Main from './Main'
import Projects from './Projects'
import ReactProjects from './ReactProjects'
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
          <Route path=':react' element={<ReactProjects />} />
        </Route>
        <Route path='about' element={<About />} />
      </Routes>
    </>
  )
}
export default App
