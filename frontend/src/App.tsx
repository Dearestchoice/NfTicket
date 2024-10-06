import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/Home'
import EventsPage from './pages/Events'
import EventPage from './pages/Event'

function App() {

  return (
    <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
      <Navbar />
      <main className='flex-1'>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/events" element={<EventsPage />}></Route>
          <Route path="/events/:id" element={<EventPage />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
