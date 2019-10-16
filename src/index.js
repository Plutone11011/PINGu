import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import Rtt from './Rtt.js';
import getPage from './urlHandler.js';
import * as serviceWorker from './serviceWorker';


class App extends React.Component {
  
  constructor(props){
    
    super(props);
    this.state = {
      url: ""
    };
    console.log("Index constructor: "+ this.state);
  }

  //every time index is mounted find current url and pass it as props to rtt component
  componentDidMount(){
    getPage((domainName) => {
      console.log("domainName: "+domainName);
      this.setState({url: domainName});
    })
  }

  
  
    /*handleClick(){
      browser.runtime.getBackgroundPage().then(onGot,onError);
    }*/

  render(){
    //logic to show something else when current page
    //does not have valid domain name
    return (
      <div className="App">
        <h1>PINGu</h1>
        <header className="App-header">
        </header>
        <Rtt url={this.state.url}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
