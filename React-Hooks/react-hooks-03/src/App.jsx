import "react"
import Counter from "./components/Counter/Counter"
import Input from "./components/Input/Input"
import InputText from "./components/InputText/InputText"
import Adding from "./components/Multiply/Adding"
import Multiply from "./components/Multiply/Multiply"
import Password from "./components/Password/Password"
import Users from "./components/Users/Users"

function App() {

  return (
    <>
    <h1>UseState and UseEffect Hooks</h1>
    <Counter/>
    <Input/>
    <Users/>
    <Password/>
    <InputText/>
    <Multiply/>
    <Adding/>
    </>
  )
}

export default App
