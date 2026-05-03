import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DepartmentPage from './pages/DepartmentPage'
import AllDepartmentsPage from './pages/AllDepartmentsPage'
import MessageFromHead from './pages/MessageFromHead'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/departments" element={<AllDepartmentsPage />} />
        <Route path="/department/:slug/*" element={<DepartmentPage />} />
        <Route path="/message-from-head" element={<MessageFromHead />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
