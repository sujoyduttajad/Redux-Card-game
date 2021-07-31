import React from 'react';
import { useSelector } from 'react-redux';
import { selectMatchedIDs } from '../board/boardSlice.js'

export const Score = () => {

  const cardsMatched = useSelector(selectMatchedIDs);

  return (
     <section className="header"> 
        <div className="score-container"><h3>Matching Memory</h3></div>
        <div className="score-container">Score: {cardsMatched.length}</div>
    </section>
  );
};