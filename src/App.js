import {BrowserRouter as   Router ,Switch , Route} from "react-router-dom"
import './App.css';
import Header from './container/Header';
import ProductListing from './container/ProductListing';
import ProductDetails from './container/ProductDetails';
import Productcompnents from './container/Productcompnents';


function App() {
  return (
    <div className="App">
        <Router>
              <Header />
              <Switch>
              <Route path="/" exact component={ProductListing} />
              <Route path="/product/:productId" exact component={ProductDetails} />
              <Route> 404 not Fond </Route>
              </Switch>
        </Router>
          
          
          
          {/* <Productcompnents /> */}
        </div>

    
  );
}

export default App;
