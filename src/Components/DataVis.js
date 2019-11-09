import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchHits: [
                {
                    searchHitContext: '',
                    link: '',
                }
            ]
        };
    }

    componentDidMount() {

    }

    render() {
        return(
            <div>
                {this.state.searchHits.map(hit => (
                <Card>
                    <CardBody>
                        <CardText>
                            <p>this is the context of the search hit. <em>Searchword</em> is mentioned in the following context.</p>
                            <a href="#">Link to this hit</a>
                        </CardText>
                    </CardBody>
                </Card>
                ))}
            </div>
        )
    }
}