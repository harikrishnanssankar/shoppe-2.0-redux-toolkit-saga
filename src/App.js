import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AllProducts from './screens/AllProducts';
import Home from './screens/Home';
import ProductScreen from './screens/ProductScreen';

function App() {



  //font-family: 'Raleway', sans-serif;
  // font-family: 'Roboto Slab', serif;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/product/:id' component={ProductScreen} />
          <Route  path='/allproducts' component={AllProducts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
