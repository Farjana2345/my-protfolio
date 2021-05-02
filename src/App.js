import './App.css';
import HomeMain from './components/Home/HomeMain';
import About from './components/About/About';
import Project from './components/Project/Project';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import NotMatched from './components/NotMatched/NotMatched';



function App() {
  return (
    <div style={{backgroundColor:'#FAF0DC'}}>
        <Router>
      <Navbar></Navbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/project">
            <Project></Project>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route exact path="/">
            <HomeMain />
          </Route>
          <Route path="/home">
            <HomeMain />
          </Route>
          <Route path="*">
            <NotMatched></NotMatched>
          </Route>
        </Switch>
        <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
