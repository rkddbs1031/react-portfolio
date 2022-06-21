import { Routes, Route } from 'react-router-dom'

import Header from './_components/Header'
import Main from './Main'
import Projects from './Projects'
import About from './About'
import './routes.module.scss'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='projects' element={<Projects />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>
  )
}
export default App
