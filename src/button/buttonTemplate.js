import React from 'react';

class buttonTemplate extends React.Component{

    render(){
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
            backgroundColor: 'rgb(0,32,255)',
            opacity: 0.2
        };

        return (
            <div style={containerButton}>
                <button style={pingButton} onClick={this.props.onclick}>
                    <span style={{fontSize:"10px",fontWeight:"bold", color:"white"}}>{this.props.content}</span>
                </button>
            </div>
        );
    }


}

export default buttonTemplate ;