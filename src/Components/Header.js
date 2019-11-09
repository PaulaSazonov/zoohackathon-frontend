import React, {Component} from 'react';
import { Container, Col, Row } from 'reactstrap';
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
                    <Col xs='12' md='4' className='hero-image'>
                    This is going to be the hero image
                    </Col>
                </Row>
            </Container>
        );
        }
}

export default Header;