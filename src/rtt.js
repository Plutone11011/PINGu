import React from 'react';
import ping from 'node-http-ping' ;
//import dns from 'dns';

class Rtt extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            rtt: 0
        }
    }

    

    componentDidMount(){
        ping(this.props.url)
                .then(RTT =>{
                    console.log(`Response time: ${RTT}ms`);
                    this.setState({rtt: RTT});
                }) 
                .catch(() => console.log(`Failed to ping google.com`));
    }

    render(){
        const rtt = this.state.rtt ;
        if (rtt){
            return(
                <p>
                    {rtt}
                </p>
            );
        }
        else{
            return(<p>No measurement taken yet</p>);
        }
    }
}




export default Rtt ;