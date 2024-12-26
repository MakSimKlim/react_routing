import {Routes, Route, NavLink} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Articles from './components/Articles';
//import logo from './logo.svg';
import './App.css';
// import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/articles">Articles</NavLink></li>
      </ul>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/articles" element={<Articles />}/>
      </Routes>
    </div>
  );
}

export default App;
