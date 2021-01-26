import React, {Component, createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
      isLightTheme: true,
      lightTheme: {
        text: '#000',
        titleBar: '#9EA7AA',
        nav: '#CFD8DC' ,
        body: '#ECEFF1'
      },
      darkTheme: {
        text: '#FFF',
        titleBar: '#4f5b62',
        nav: '#37474f' ,
        body: '#263238'
      },
      isLoggedIn: false
    }

    switchTheme = () => {
      this.setState({
        isLightTheme: !this.state.isLightTheme
      })
    }

    switchLogin = () => {
      this.setState({
        isLoggedIn: !this.state.isLoggedIn
      })
    }

  render() {
    return(
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.switchTheme, switchLogin: this.switchLogin}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider;