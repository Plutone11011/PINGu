import React, {Component} from 'react';
import ping from 'node-http-ping' ;
//import './styles/Rtt.css';
import CircularIndeterminate from './circularIndeterminate.js';
import ButtonTemplate from './buttonTemplate';
import browser from 'webextension-polyfill';


class Rtt extends Component{

    buttonStates = { //finite states for this component
        loading: 'loading',
        idle: 'idle',
        success: 'success',
        failure: 'failure'
    };

    //every time the popup is loaded for the first time
    //the component is in an idle state, waiting for the user to ping
    constructor(props){
        super(props);
        this.state = {
            rtt: 0,
            buttonState: this.buttonStates.idle 
        }
        this.pingOnClick = this.pingOnClick.bind(this);
    }

    

    pingOnClick(){
        //loading state renders the circular progress
        //component, until ping has returned
        this.setState({buttonState: this.buttonStates.loading});
        ping(this.props.url)
                .then(RTT =>{
                    var bg = browser.runtime.getBackgroundPage() ;
                    bg.then(function OnGot(page){
                        const history = new page.ping_history(); 
                        history.addPing(RTT);
                        console.log(history.getHistory());
                    }, function OnError(error){
                        console.log("Couldn't find bg: "+ error);
                    });
                    //bg.ping_history.addPing(RTT);
                    this.setState({rtt: RTT, buttonState: this.buttonStates.success});
                }) 
                .catch(() => {
                    console.log(`Failed to ping ${this.props.url}`);
                    this.setState({rtt:0 ,buttonState: this.buttonStates.failure});
                });
    }


    render(){
        
        switch(this.state.buttonState){
            case 'idle':
                return(
                    <ButtonTemplate onclick={this.pingOnClick} content={"Ping here!"}></ButtonTemplate>
                );
            case 'loading':
                return(
                    <CircularIndeterminate/>
                );
            case 'success':
                return(
                    <ButtonTemplate onclick={this.pingOnClick} content={this.state.rtt}></ButtonTemplate>
                );
            case 'failure':
                
                return(
                    <ButtonTemplate onclick={this.pingOnClick} content={"Couldn't ping this website. Didn't find a valid host."}></ButtonTemplate>
                );

        }
            
    }
}




export default Rtt ;