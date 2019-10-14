import React, {Component} from 'react';
import ping from 'node-http-ping' ;
//import './styles/Rtt.css';

class Rtt extends Component{

    constructor(props){
        console.log(props);
        super(props);
        this.state = {
            rtt: 0
        }
        this.pingOnClick = this.pingOnClick.bind(this);
    }

    

    pingOnClick(){
        ping(this.props.url)
                .then(RTT =>{
                    console.log(`Response time: ${RTT}ms`);
                    this.setState({rtt: RTT});
                }) 
                .catch(() => console.log(`Failed to ping ${this.props.url}`));
    }


    render(){
        //style for View container and the button
        
        const containerButton = {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'inherit'
        }
        
        const pingButton = {
            padding: 15,
            height: 100,
            width: 100,  /*The Width must be the same as the height*/
            borderRadius:200, /*Then Make the Border Radius twice the size of width or Height*/   
            backgroundColor: 'rgb(0,0,128)',
            opacity: 0.2
        };

        let rtt = this.state.rtt ;
        let buttonText ;
        if (rtt){
            buttonText = rtt;
        }
        else {
            buttonText = "Ping here!";
        }
        console.log(this.state);
        console.log(buttonText);
        return(
            <div style={containerButton}>
                <button style={pingButton} onClick={this.pingOnClick}>
                    <span style={{fontSize:"10px",fontWeight:"bold", color:"red"}}> {buttonText} </span>
            </button></div>
        );
        
    }
}




export default Rtt ;