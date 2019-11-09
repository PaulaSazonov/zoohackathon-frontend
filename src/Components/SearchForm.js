import React, {Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchUrl: '',
            searchWord: '',
        };
    }

    componentDidMount() {

    }

    render() {
        return(
            <Form>
            <FormGroup>
              <Label for="searchUrl">Anna Url josta haetaan</Label>
              <Input type="text" name="searchUrl" id="searchUrl" placeholder="with a placeholder" />
              <Label for="searchWord">Email</Label>
              <Input type="text" name="searchWord" id="searchWord" placeholder="with a placeholder" />
            </FormGroup>
            </Form>
        )
    }
}