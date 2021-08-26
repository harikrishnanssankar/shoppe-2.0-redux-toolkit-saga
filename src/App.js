import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import ProductScreen from './screens/ProductScreen';

function App() {



  //font-family: 'Raleway', sans-serif;
// font-family: 'Roboto Slab', serif;
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/product/:id' component={ProductScreen} />
      </Router>
    </div>
  );
}

export default App;
  