import React from 'react'
import { Card, CardText, CardBody } from 'reactstrap'
import mockData from '../mockdata.json'
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

    //  let data = props
    let data = mockData

    return (
        <div>
            {data.searchResults.map((hit, index) => (
                <Card key={index}>
                    <CardBody>
                        <CardText>{boldenSearchWord(hit.context, data.searchWord)}</CardText>
                        <CardText>
                            <a href="{hit.link}">{hit.link}</a>
                        </CardText>
                    </CardBody>
                </Card>
            ))}
        </div>
    )
}

export default DataVis
