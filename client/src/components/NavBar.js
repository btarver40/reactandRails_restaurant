import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';


const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'violet',
  }
}



const NavBar = () => (
  <div className="navbar">
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to="/menu">Menu</NavLink>
  </nav>
  </div>
)

export default withRouter(NavBar);


// I have a const because I am not calling state