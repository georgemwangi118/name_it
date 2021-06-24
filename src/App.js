import React, {Component} from 'react';
import Header from './components/Header/Header';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import Result from './components/ResultContainer/Result';

const name = require('@rstacruz/startup-name-generator')

class App extends Component {

  state = {
    headerExpanded: true,
    suggestedNames: [],
  }

  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded: !inputText,
      suggestedNames: inputText ? name(inputText) : [],
    });
  }
  render() {
    return (
      <div>
        <Header headerExpanded={this.state.headerExpanded} />
        <SearchBox onInputChange={this.handleInputChange} />
        <Result suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
