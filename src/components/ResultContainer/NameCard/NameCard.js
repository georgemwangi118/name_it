import React from 'react';
import './NameCard.css';

const nameCheapUrl = "https://www.namecheap.com/domains/registration/results/?domain=";

const NameCard = ({ suggestedName }) => {
    return (
        <a target="_blank" rel="noreferrer" className="cardLink" href={`${nameCheapUrl}${suggestedName}`}>
            <div className="resultNameCard">
                <p className="resultName">{suggestedName}</p>
            </div>
        </a>
    )
}

export default NameCard
