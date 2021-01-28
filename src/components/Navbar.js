import React from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';

class Navbar extends React.Component {
  // static contextType = ThemeContext; 
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => {
          return (
      <ThemeContext.Consumer>
        {(themeContext)=>{
          const {toggleAuth, isLoggedIn} = authContext
          const {isLightTheme, lightTheme, darkTheme} = themeContext;
          const theme = isLightTheme ? lightTheme : darkTheme;
          return (
            <ul className="navbar" style={{backgroundColor:theme.nav, color:theme.text}}>
            <li>Home</li>
            <li>About</li>
            <li onClick={toggleAuth}>{isLoggedIn ? 'Logout': 'Login'}</li>
          </ul>
          )
        }}

      </ThemeContext.Consumer>
    )
    }}
    </AuthContext.Consumer>
    )
  }
}

export default Navbar;