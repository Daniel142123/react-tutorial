 import {Login} from './Login'
import {Signup} from './Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
