import './App.css'
import Job from './components/Job'

function App() {

  return (
    <>
    <Job salary={8000} position="Intern Web Developer" company="iBos"/>
    <Job salary={25000} position="Junior Web Developer" company="Technext"/>
    <Job salary={75000} position="Senior Web Developer" company="EE Technologies"/>
    </>
  )
}

export default App
