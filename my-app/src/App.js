import React, { Component } from 'react';
// import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
// import LeftMenu from './components/LeftMenu';

class App extends Component {
  render() {
    return (
      <div className='App'>
        < Header />
        {/* < LeftMenu /> */}
        < MainPage />
        < Footer />
      </div>
    );
  }
}

export default App;
