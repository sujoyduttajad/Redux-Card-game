import React from 'react';
import { Score } from './redux/features/score/Score.js';
import { Board } from './redux/features/board/Board.js';
import { useDispatch } from 'react-redux';
import { setBoard, resetCards } from './redux/features/board/boardSlice.js'

const App = () => {

  const dispatch = useDispatch();

  const startGameHandler = () => {
    return dispatch(setBoard());
  };

  const tryAgainHandler = () => {
    return dispatch(resetCards());
  };

  return (
    <div className="App">
      <Score />
      <Board />
      <footer className="footer">
        <button onClick={startGameHandler} className="start-button">
          Start Game
        </button>
        <button onClick={tryAgainHandler} className="try-new-pair-button">
          Try New Pair
        </button>
      </footer>
    </div>
  );
};

export default App;
