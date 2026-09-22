import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Student Wellness Support Portal</h1>
              <p>Router is working!</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App