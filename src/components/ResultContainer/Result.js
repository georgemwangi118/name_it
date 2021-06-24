import React from 'react';
import './Result.css'
import NameCard from './NameCard/NameCard';

const Result = ({ suggestedNames }) => {

    const suggestedNameJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    });

    return (
        <div className="results-container">
            {suggestedNameJsx}
        </div>
    )
}

export default Result
