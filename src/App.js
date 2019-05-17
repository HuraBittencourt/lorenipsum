import './App.css';

import { Container, Row } from 'react-bootstrap';
import React, { Component } from 'react';

import Header from './layout/header';
import PhraseGenerator from './phrase-generator';

// import Container from 'bootstrap/dist/css/bootstrap.css';


const componentClassName = 'app';

componentDidMount() {
  
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container className={`${componentClassName}`}>
          <Row className={`${componentClassName}__row`}>
            <PhraseGenerator />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
