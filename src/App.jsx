
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dasboard from './pages/Dashboard';
import './App.css'
import StudentDetails from './pages/StudentDetails';

function App() {

  return (
    <>
      <Router>
      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/dashboard" element={<Dasboard />}/>
          <Route path="/students/:id" element={<StudentDetails />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
