import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';
import mockData from '../mockdata.json';
import '../Stylesheets/DataVis.css';


const DataVis = props => {

//  let data = props 
let data = mockData

        return(
            <div>
                {data.map((hit, index) => (
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

export default DataVis;