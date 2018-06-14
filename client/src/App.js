import React, { Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';


const App = () => (
<Fragment>
  <NavBar/>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Menu" component={Menu}/>
    <Route component={NoMatch}/>
  </Switch>

</Fragment>
);


export default App;
//  the NoMatch 404 page MUST be at the bottom of your routes

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }


// I like to start here first!
// determine which routes I need then build out from there!