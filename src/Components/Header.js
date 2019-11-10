import React, {Component} from 'react';
import { Container, Col, Row } from 'reactstrap';
import pang from '../Images/pang.svg';
import '../Stylesheets/header.css';

class Header extends Component {
    render() {
        return (
            <Container className='header-container'>
                <Row id="header-row">
                    <Col xs='12' md='8' id="header-text">
                    <div className='headline'>
                        TRAFFICnator
                    </div>
                    <div id="header-subtext">
                    This app was developed in Korkeasaari ZooHackathon for conservationists as a 
                    starting point for a tool that allows the user to enter search criteria for 
                    spesific sites. It gives the user a summary of the data received.
                    </div>
                    </Col>
                    <Col xs='12' md='4' >
                    <img src={pang} alt='Trafficnator logo' className='hero-image'/>
                    </Col>
                </Row>
            </Container>
        );
        }
}

export default Header;