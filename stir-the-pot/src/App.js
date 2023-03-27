import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import OrderForm from './components/OrderForm';
import Home from './components/Home';
import './components/OrderForm.css';
  // Order form links to order form screen
function App() {
  return (
    <div className="App">
    <div class = "sidebar">
      <div class = "order-form">
        <Link to = "/OrderForm">OrderForm </Link>
      </div>
     <a class = "sidebarLink" href="https://google.com">Dummy 1</a>
    </div>


      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/OrderForm" element={<OrderForm/>} />
      </Routes>

      <header className="order-form">
      </header>
    </div>
  );
}

export default App;
