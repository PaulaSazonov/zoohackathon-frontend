import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';
import mockData from '../mockdata.json';
import '../Stylesheets/DataVis.css';


const DataVis = props => {

let data = props.searchResults.data
// let data = mockData

        return(
            <div>
                {data !== undefined? data.map((hit, index) => (
                <Card key={index}>
                    <CardBody>
                        <CardText>
                            {hit.textContext}
                        </CardText>
                        <CardText>
                            <a href="{hit.link}">{hit.url}</a>
                        </CardText>
                    </CardBody>
                </Card>
                )): ''}
            </div>
        )
    
}

export default DataVis;