import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <Navbar />
          <Main />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
