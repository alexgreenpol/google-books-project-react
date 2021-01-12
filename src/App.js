import React, { Component } from "react";
import Header from './components/Header';
import Books from  './components/Books';

import './styles/App.css';

class App extends Component {
    render() {
        return (
            <main>
                <Header />
                <Books />
            </main>
        );
    }
}

export default App;