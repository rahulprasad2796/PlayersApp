
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Players from './Components/Players';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <BrowserRouter>
    <Switch>
      <Route path="/" exact to component={Home}/>
      <Route path="/players" component={Players}/>
    </Switch>
    </BrowserRouter> );
  }
}
 
export default App;