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
            height:200,
            width: 200,  /*The Width must be the same as the height*/
            borderRadius:400, /*Then Make the Border Radius twice the size of width or Height*/   
            backgroundColor: 'rgb(0,0,255)',
            opacity: 1
        };

        return (
            <div style={containerButton}>
                <button style={pingButton} onClick={this.props.onclick}>
                    <span style={{fontSize:"20px",fontWeight:"bold", color:"white"}}>{this.props.content}</span>
                </button>
            </div>
        );
    }


}

export default buttonTemplate ;