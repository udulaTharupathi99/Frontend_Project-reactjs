import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Registration from './components/Registration';
import Welcome from './components/Welcome';


function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <div>
          <Routes >
            <Route exact path="/" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/welcome" element={<Welcome/>}/>
         </Routes >
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
