import { slide as Menu } from 'react-burger-menu'
import React from 'react' ;
import ReactDOM from 'react-dom';

class HamburgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="statistics" className="menu-item" href="/statistics">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

//ReactDOM.render(<HamburgerMenu/>, document.getElementById("menu"));
export default HamburgerMenu ; 