import React, {Component} from 'react';
import { Container, Col, Row } from 'reactstrap';
import pang from '../Images/pang.svg';
import '../Stylesheets/header.css';

class Header extends Component {
    render() {
        return (
            <Container className='header-container'>
                <Row>
                    <Col xs='12' md='8'>
                    <div className='headline'>
                        TRAFFICnator
                    </div>
                    You can use this application to search for keywords in spesific sites. 
                    This app was developed in Korkeasaari ZooHackathon.
                    We have to come up with some text in here.
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