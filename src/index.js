import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import Rtt from './rtt.js';
import Psl from 'psl';
import browser from 'webextension-polyfill';
import * as serviceWorker from './serviceWorker';


class App extends React.Component {
  
  constructor(props){
    
    super(props);
    this.state = {
      url: ""
    };
    console.log("Index constructor: "+ this.state);
  }

  //every time index is mounted research current url
  componentDidMount(){
    this.getPage((domainName) => {
      this.setState({url: domainName});//this re-renders index
    })
  }

  extractHostname(url){
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];
    console.log("Hostname: "+hostname);
    return hostname;
  }

    //gets current tab's url
  getPage(callback){ 
        browser.tabs.query({currentWindow: true, active: true})
        .then((tabs) => {
          console.log("Full url: "+tabs[0].url);
          callback(Psl.get(this.extractHostname(tabs[0].url)));
        });
  }
  
    /*handleClick(){
      browser.runtime.getBackgroundPage().then(onGot,onError);
    }*/

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React. 
          </a>
        </header>
        <Rtt url={this.state.url}/>
      </div>
    );
  }
}

//<Rtt url={this.state.url} />

/*function onGot(page) {
  getPage((domainName) => {
    page.computeRTT(domainName,(RTT)=>{
      ReactDOM.render(<p>{RTT}</p>,document.getElementById('ping'));
    });  
  });
}

function onError(error) {
    console.log(`Error: ${error}`);
}
  
browser.runtime.getBackgroundPage().then(onGot,onError);
*/
console.log("Passa di qui");
ReactDOM.render(<App/>, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
