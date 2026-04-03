import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import GearExplorer from './pages/GearExplorer'
import FamousTones from './pages/FamousTones'
import ToneDetail from './pages/ToneDetail'
import Admin from './pages/Admin'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="explorer" element={<GearExplorer />} />
        <Route path="tones" element={<FamousTones />} />
        <Route path="tones/:id" element={<ToneDetail />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  )
}

export default App
