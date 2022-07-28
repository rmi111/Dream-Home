import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import { Component } from 'react';

class App extends Component {
  render(){
    return (
        <Router>
          <div>
            <Route exact path='/' component={ABC}></Route>
            <Route exact path='/properties' component={ABC}></Route>
            <Route exact path='/properties/:id' component={ABC}></Route>
            <Route exact path='/properties/add-listing' component={ABC}></Route>
          </div>
        </Router>  
      );
    }
  }
}

export default App;
