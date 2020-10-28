import './App.scss';
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CallToaAction from './components/CallToAction'
import Home from './components/Homepage'
import Documentaion from './components/Documentation'
import About from './components/About'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
      <Router>
        <ScrollToTop>
        <div className="App">
            <Nav />
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/docs' component={Documentaion}/>
                <Route path='/about' component={About}/>
            </Switch>
            <CallToaAction />
            <Footer />
        </div>
        </ScrollToTop>
      </Router>
  );
}

export default App;
