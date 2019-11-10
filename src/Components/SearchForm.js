import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Spinner,
  Alert
} from 'reactstrap';
import { GetSearchResults } from '../ServiceClient';
import DataVis from './DataVis';
import '../Stylesheets/SearchForm.css';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchUrl: '',
      searchWord: '',
      isProcessing: false,
      searchResults: []
    };
  }

  handleChange = e => {
    const id = e.target.id;
    const value = e.target.value;

    if (id === 'searchUrl') {
      this.setState({ searchUrl: value });
    } else {
      this.setState({ searchWord: value });
    }
  };

  handleClick = async () => {
    this.setState({ isProcessing: true });
    let searchParameters = this.state;

    try {
      const results = await GetSearchResults(searchParameters);
      this.setState({ searchResults: results, isProcessing: false });
    } catch (err) {
      console.log(err);
      this.setState({ searchResults: 'error', isProcessing: false });
    }
  };

  render() {
    let searchResults = '';
    if (this.state.isProcessing) {
      return <Spinner color='success' />;
    } else {
      searchResults = this.state.searchResults;
    }
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label for='searchUrl'>URL</Label>
            <Input
              type='text'
              name='searchUrl'
              id='searchUrl'
              placeholder='e.g. https://www.terraristik.com/'
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='searchWord'>Search Word</Label>
            <Input
              type='text'
              name='searchWord'
              id='searchWord'
              placeholder='e.g. alligator'
              onChange={this.handleChange}
            />
          </FormGroup>
        </Form>
        <Button color='success' size='lg' onClick={this.handleClick}>
          Search
        </Button>
        {this.state.searchResults === 'error' ? (
          <Alert color='success' style={{marginTop: '20px'}}>
            Sorry, we couldn't find any results! 
          </Alert>
        ) : (
          <DataVis
            searchResults={searchResults}
            searchWord={this.state.searchWord}
          />
        )}
      </Container>
    );
  }
}
