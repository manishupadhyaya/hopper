import React,{Component} from 'react';
import Home from './routes/home';
import Store from './routes/store';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

class App extends Component{
    constructor(){
      super()
      
      this.state = {}
    }
    render(){
      return(
          <BrowserRouter>
              <Switch>
                  <Route path='/home' component={Home} />
                  <Route path='/store' component={Store}/>
              </Switch>
          </BrowserRouter>
      );
    }
    
}
export default App