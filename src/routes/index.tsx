import { Routes, Route } from 'react-router-dom'

import Header from './_components/Header'
import Main from './Main'
import Projects from './Projects'
import './routes.module.scss'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </>
  )
}
export default App
