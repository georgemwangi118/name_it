import React, {useState} from 'react';
import Header from './components/Header/Header';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import Result from './components/ResultContainer/Result';

const name = require('@rstacruz/startup-name-generator')

const App = () => {

  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  const handleInputChange = (inputText) => {
      setHeaderExpanded(!inputText);
      setSuggestedNames(inputText ? name(inputText) : []);
    };

    return (
      <div>
        <Header headerExpanded={headerExpanded} />
        <SearchBox onInputChange={handleInputChange} />
        <Result suggestedNames={suggestedNames} />
      </div>
    );
};

export default App;
