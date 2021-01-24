import React, {Component, createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLightTheme: true,
      lightTheme: {
        text: '#000',
        titleBar: '#9EA7AA',
        nav: '#CFD8DC' ,
        body: '#ECEFF1'
      },
      darkTheme: {
        text: '#FFF',
        titleBar: '#4F5B62',
        nav: '#37474F' ,
        body: '#263238'
      }
    }
  }
  render() {
    return(
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider;