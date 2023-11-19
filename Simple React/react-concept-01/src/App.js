import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name : "Laptop", price : 65000},
    {name : "Phone", price : 65000},
    {name : "Earphone", price : 1000},
  ]
  return (
    <div className="App">
      <Product name = "Asus - Laptop" price = "65000"></Product>
      <Product name = "Realme - Phone" price = "15000"></Product>
      {
        products.map (p => <Product name = {p.name} price = {p.price}></Product>)
      }
    </div>
  )
}

function Product (props){
  return (
    <section className="container">
    <div className="product">
      <h1>Brand : {props.name}</h1>
      <p>Price : {props.price}</p>
    </div>
    </section>
  )
}
export default App;
