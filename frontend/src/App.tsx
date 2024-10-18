import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/Home'
import EventsPage from './pages/Events'
import EventPage from './pages/Event'
import TicketsPage from './pages/Tickets'
import MintPage from './pages/Mint'
import CreateEventPage from './pages/Create';
import MarketplacePage from './pages/Marketplace'
import TicketPage from './pages/Ticket'
import PageNotFound from './pages/404'

import "./App.css";

function App() {

  return (
    <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
      <Navbar />
      <main className='flex-1'>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/tickets" element={<TicketsPage />}></Route>
          <Route path="/tickets/:id" element={<TicketPage />}></Route>
          <Route path="/mint" element={<MintPage />}></Route>
          <Route path="/create" element={<CreateEventPage />}></Route>
          <Route path="/marketplace" element={<MarketplacePage />}></Route>
          <Route path="/events" element={<EventsPage />}></Route>
          <Route path="/events/:id" element={<EventPage />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
