import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers (){
  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then (data => setUsers(data));
  }, []);
  return(
    <div>
      <h2>External Users</h2>
      {
        users.map(user => <User name = {user.name} mail={user.email}></User>)
      }
    </div>
  )

}

function User (props){
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h2>Email : {props.mail}</h2>
    </div>
  )
}

export default App;
