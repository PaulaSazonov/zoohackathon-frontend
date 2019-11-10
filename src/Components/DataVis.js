import React from 'react';
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
                            <a href={hit.url}>{hit.url}</a>
                        </CardText>
                        <CardText>
                            Price: {hit.prize === null? "No price info available" : hit.prize + ' ' + hit.currency}
                        </CardText>
                    </CardBody>
                </Card>
                )): ''}
            </div>
        )
    
}

export default DataVis;