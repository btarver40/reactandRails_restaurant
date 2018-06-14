import React from 'react';
import {NavLink} from 'react-router-dom';


const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'violet',
  }
}



const NavBar = () => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to="/menu">Menu</NavLink>
  </nav>
)

export default NavBar;


// I have a const because I am not calling state