import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/Home'

function App() {

  return (
    <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
      <Navbar />
      <main className='flex-1 px-4 sm:px-6 lg:px-8'>
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default App
