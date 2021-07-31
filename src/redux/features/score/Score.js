import React from 'react';
import { useSelector } from 'react-redux';
import { selectMatchedIDs } from '../board/boardSlice.js'

export const Score = () => {

  const cardsMatched = useSelector(selectMatchedIDs);

  return (
    // implemented selected data inside <div>
    <div className="score-container">Score: {cardsMatched.length}</div>
  );
};