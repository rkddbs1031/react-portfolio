import { Routes, Route } from 'react-router-dom'

import Header from './_components/Header'
import Main from './Main'
import './routes.module.scss'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  )
}
export default App
