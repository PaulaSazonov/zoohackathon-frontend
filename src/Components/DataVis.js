import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';
import mockData from '../mockdata.json';
import '../Stylesheets/DataVis.css';


export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchHits: props
        };
    }

    componentDidMount() {

        console.log('Search hits:', this.state.searchHits)
    }

    render() {
        return(
            <div>
                {this.state.searchHits.map((hit, index) => (
                <Card key={index}>
                    <CardBody>
                        <CardText>
                            {hit.context}
                        </CardText>
                        <CardText>
                            <a href="{hit.link}">{hit.link}</a>
                        </CardText>
                    </CardBody>
                </Card>
                ))}
            </div>
        )
    }
}