import {Routes, Route} from 'react-router-dom';
// import {Routes, Route, NavLink} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import AboutInfo from './components/AboutInfo';
import Articles from './components/Articles';

//import logo from './logo.svg';
import './App.css';
// import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">  
      {/* <ul>
        <Layout/>          
      </ul>  */}

      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="about/:id" element={<AboutInfo />} />
              <Route path="articles" element={<Articles />} />
          </Route>
      </Routes>   
    </div>
  );
}

export default App;
