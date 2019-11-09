import React from 'react';
import './Stylesheets/App.css';
import SearchForm from './Components/SearchForm';
import DataVis from './Components/DataVis';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <SearchForm/>
    <DataVis/>
  );
}

export default App;
