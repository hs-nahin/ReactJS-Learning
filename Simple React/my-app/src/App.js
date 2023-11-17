import logo from './logo.svg';
import './App.css';

let age = 23;

function App() {
  const moreSkills = ["React", "Redux", "Next.js"]
  return (
    <div className="App">
      <p>Hi, My Name is <Person /></p>
      <p>I am {age} years old.</p>
      <CV />
      <p>I know</p>
      <Skill name = "JavaScript" more = {moreSkills[0]}/>
      <p>I am also going to learn</p>
      {
        moreSkills.map (ms => <li>{ms}</li>)
      }
    </div>
  );
}

function Person() {
  return (
    <div>
      <h1 className='name'>Hasnat Shahriyar Nahin</h1>
    </div>
  );
}

function CV() {
  return (
    <div>
      <p>Here is my CV</p>
      <button className="button">Download My CV</button>
    </div>
  );
}

function Skill (props){
  return (
    <div>
      <h1 className='skill'>HTML, CSS, {props.name}, {props.more}</h1>
    </div>
  )
}

export default App;
