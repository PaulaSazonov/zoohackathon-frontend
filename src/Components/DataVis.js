import React from 'react'
import { Card, CardText, CardBody } from 'reactstrap'
import '../Stylesheets/DataVis.css'

const DataVis = props => {
    const boldenSearchWord = (context, searchWord) => {

        const reg = new RegExp(searchWord, 'gi');
        const boldSearchWord = context.match(reg);
        const [before, after] = context.split(reg)

        return (
        <span>
            {before}
            {boldSearchWord && boldSearchWord[0] && 
            <b>{boldSearchWord[0]}</b>
            }
            {after}
        </span>
        );
    };

let data = props.searchResults.data

        return(
            <div>
                {data !== undefined? data.map((hit, index) => (
                <Card key={index}>
                    <CardBody>
                        <CardText>
                            {boldenSearchWord(hit.textContext, props.searchWord)}
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

export default DataVis
