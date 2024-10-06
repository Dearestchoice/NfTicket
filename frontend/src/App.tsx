import Navbar from './components/Navbar'
import Footer from './components/Footer'
import "./App.css";
import HomePage from './pages/Home'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className='flex-1 container'>
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default App
