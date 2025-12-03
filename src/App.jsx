import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './pages/Home'
import { Topic } from './pages/Topic'
import { AddCard } from './pages/AddCard'
import { AddTopic } from './pages/AddTopic'
import '@fontsource/inter';
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/addtopic" element={<AddTopic />} />
        <Route path="/addcard" element={<AddCard />} />
      </Routes>
    </div>
  )
}

export default App
