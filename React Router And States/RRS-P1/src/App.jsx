import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'

function App() {


  return (
    <>
      {/* <h1 className='text-5xl text-blue-600'>Hello I am testing Tailwind</h1> */}
      <Navbar></Navbar>
      <PriceList/>
      <Dashboard/>
    </>
  )
}

export default App
