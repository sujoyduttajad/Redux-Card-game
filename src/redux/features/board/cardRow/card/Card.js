import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleIDs, flipCard, resetCards, selectMatchedIDs } from '../../boardSlice.js'

// let cardLogo = "https://images-platform.99static.com//yMu615t0H7ZoE7NAZn48S48DZGY=/350x309:851x810/fit-in/590x590/99designs-contests-attachments/90/90852/attachment_90852898";
let cardLogo = "https://upload.wikimedia.org/wikipedia/commons/6/6d/5C.svg";

export const Card = ({ id, indices, contents }) => {
  // selected data and dispatch variables
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);
  const dispatch = useDispatch();

  // flip card action
  const flipHandler = (id) => {
    return dispatch(flipCard(id));
  };
  const resetHandler = (id) => {
    return dispatch(resetCards(indices));
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  // 1st if statement
  // implement card id array membership check
  if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  if (matchedIDs.includes(id)) {
    cardStyle = 'matched';
  } else {
    cardStyle = 'no-match'
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visibleIDs.length === 2) {
    click = () => {};
  }

  // Reset the unmatched cards by clicking any card. 
  // if (!matchedIDs.includes(id)) {
  //   click = () => resetCards(matchedIDs.indexOf(indices));
  // }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
