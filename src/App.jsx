import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './pages/Home'
import { Topic } from './pages/Topic'
import { AddCard } from './pages/AddCard'
import { AddTopic } from './pages/AddTopic'
import '@fontsource/inter';
import { FlashCards } from './pages/FlashCards'
import { HomeButton } from './components/HomeButton'
function App() {

  return (
    <div>
      <HomeButton/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/addtopic" element={<AddTopic />} />
        <Route path="/addcard/:id" element={<AddCard />} />
        <Route path="/cards/:id" element={<FlashCards />} />
      </Routes>
    </div>
  )
}

export default App
