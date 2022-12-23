import * as React from 'react';
import './style.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import User from './User';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="linkzz">
          <Link to="/">HomePage</Link> &nbsp; &nbsp;
          <Link to="/electronics">Electronics</Link> &nbsp; &nbsp;
          <Link to="/vegetables">Vegetables</Link> &nbsp; &nbsp;
          <Link to="/sweets/">Sweets</Link> &nbsp;&nbsp;
          <Link to="/user/10?filter=true&sort=asc">User</Link> &nbsp; &nbsp;
        </div>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/electronics" element={<Electronics />}></Route>
          <Route path="/vegetables" element={<Vegetables />}></Route>
          <Route path="/sweets" element={<Sweets />}></Route>
          <Route path="/user/:userid" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <h1>Welcome to Instamart</h1>
        <h3>Happy Shopping :)</h3>
      </div>
      <div className="con2">
        <button onClick={() => navigate(-1)}>Go Back</button> &nbsp;&nbsp;
        <button onClick={() => navigate(1)}>Go Forward</button> &nbsp;&nbsp;
        <button onClick={() => navigate(('user/10'),{state:{name:'Vaishoo',city:'Chennai'}})}>Go to User</button>
      </div>
    </div>
  );
}

function Electronics() {
  const navigate = useNavigate();
  return (
    <div className="items">
      <h1>Electronics</h1>
      <ul>
        <li>Phone</li>
        <li>Laptop</li>
        <li>Television</li>
      </ul>
      <button onClick={() => navigate(-1)}>Go Back</button> &nbsp;&nbsp;
      <button onClick={() => navigate(1)}>Go Forward</button>
    </div>
  );
}

function Vegetables() {
  const navigate = useNavigate();
  return (
    <div className="items">
      <h1>Vegetables</h1>
      <ul>
        <li>Tomato</li>
        <li>Cauliflower</li>
        <li>Carrot</li>
      </ul>
      <button onClick={() => navigate(-1)}>Go Back</button> &nbsp;&nbsp;
      <button onClick={() => navigate(1)}>Go Forward</button>
    </div>
  );
}

function Sweets() {
  const navigate = useNavigate();
  return (
    <div className="items">
      <h1>Sweets</h1>
      <ul>
        <li>Kaju Katli</li>
        <li>Halwa</li>
        <li>Milk cake</li>
      </ul>
      <button onClick={() => navigate(-1)}>Go Back</button> &nbsp;&nbsp;
      <button onClick={() => navigate(1)}>Go Forward</button>
    </div>
  );
}
