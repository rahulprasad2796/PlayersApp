import axios from 'axios';
import React, { Component } from 'react';
import "./Players.css";

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = { players:[] }
    }

    componentDidMount() {
        axios.get("http://localhost:8000/player")
        .then((res) => {
            this.setState({players: res.data})
        })
    }
    
    render() { 
        return ( 
            <div>
            <h1>Players</h1>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
                <div className="carousel-inner">
                {this.state.players.map((v,i) => {
                        return <div className="carousel-item" key={i}>
                        <div>
                            <img src={v.img} alt={v.name} />
                        </div>
                        <div>
                            <h4>Name: {v.name}</h4>
                        
                            <h4>Date of Birth: {v.dob}</h4>
                        
                            <h4>Matches Played</h4>
                            <ul>
                                <li><h6>Test: {v.mpt}</h6></li>
                                <li><h6>ODI: {v.mpo}</h6></li>
                            </ul>
                        
                            <h4>Runs Scored</h4>
                            <ul>
                                <li><h6>Test: {v.rst}</h6></li>
                                <li><h6>ODI: {v.rso}</h6></li>
                            </ul>
                        </div>
                    </div>
                    })}
                <div className="carousel-item active">
                    <div>
                        <img src="https://th.bing.com/th/id/OIP.lOxpfaGnF9vu1gHd3d0zTwHaEK?pid=ImgDet&rs=1" alt="klrahul" />
                    </div>
                    <div>
                        <h4>Name: Kananur Lokesh Rahul</h4>
                    
                        <h4>Date of Birth: 18th April 1992</h4>
                    
                        <h4>Matches Played</h4>
                        <ul>
                            <li><h6>Test: 40</h6></li>
                            <li><h6>ODI: 38</h6></li>
                        </ul>
                    
                        <h4>Runs Scored</h4>
                        <ul>
                            <li><h6>Test: 2321</h6></li>
                            <li><h6>ODI: 1509</h6></li>
                        </ul>
                    </div>
                </div>                
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>Prev
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">Next
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
        </div> );
    }
}
 
export default Players;