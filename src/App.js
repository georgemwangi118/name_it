import React, {Component} from 'react';
import Header from './components/Header/Header';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import Result from './components/ResultContainer/Result';

class App extends Component {

  state = {
    headerExpanded: true,
  }

  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded: !inputText
    });
  }
  render() {
    return (
      <div>
        <Header headerExpanded={this.state.headerExpanded} />
        <SearchBox onInputChange={this.handleInputChange} />
        <Result />
      </div>
    );
  }
}

export default App;
