import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="omain">
            <h1>Players App</h1>
            <p>Welcome to players app here you can get details of Cricket Players.</p>
            <Link to={{pathname:"/players"}}><button>Press Enter to Proceed</button></Link>
          </div> );
    }
}
 
export default Home;