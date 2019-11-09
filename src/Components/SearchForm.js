import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchUrl: '',
      searchWord: ''
    };
  }

  componentDidMount() {}

  handleChange = e => {
      const id = e.target.id
      const value = e.target.value

      if(id === "searchUrl"){
        this.setState({searchUrl: value})
      } else {
        this.setState({searchWord: value})
      }

      console.log(this.state)
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log("state on submit: ", this.state)
  }

  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label for='searchUrl'>URL</Label>
            <Input
              type='text'
              name='searchUrl'
              id='searchUrl'
              placeholder='Insert URL'
              onChange={this.handleChange}
            />
            </FormGroup>
            <FormGroup>
            <Label for='searchWord'>Search Word</Label>
            <Input
              type='text'
              name='searchWord'
              id='searchWord'
              placeholder='Insert search word'
              onChange={this.handleChange}
            />
          </FormGroup>
        </Form>
        <Button color='primary' onClick={this.handleSubmit}>GO!</Button>
      </Container>
    );
  }
}
