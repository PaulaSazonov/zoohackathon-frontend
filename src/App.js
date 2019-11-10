import React from 'react'
import './Stylesheets/App.css'
import SearchForm from './Components/SearchForm'
import 'bootstrap/dist/css/bootstrap.css'

import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
    return (
        <div>
            <Header />
            This is our app wrapper
            <div className="content">
                <SearchForm />
            </div>
            <Footer />
        </div>
    )
}

export default App
