import './App.css'
import Age from './components/Age/Age'
import Job from './components/Job/Job.jsx'

function App() {

  return (
    <>
    <Job salary={8000} position="Intern Web Developer" company="iBos"/>
    <Job salary={25000} position="Junior Web Developer" company="Technext"/>
    <Job salary={75000} position="Senior Web Developer" company="EE Technologies"/>
    <Age/>
    </>
  )
}

export default App
