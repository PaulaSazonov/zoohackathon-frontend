import React, {Component} from 'react';
import { Container, Col, Row } from 'reactstrap';
import '../Stylesheets/header.css';

class Header extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm='6'>
                    <div className='headline'>
                        TRAFFICnator
                    </div>
                    You can use this application to search for keywords in spesific sites. This app was developed in Korkeasaari ZooHackathon.
                    </Col>
                    <Col sm='6' className='hero-image'>
                    This is going to be the hero image
                    </Col>
                </Row>
            </Container>
        );
        }
}

export default Header;