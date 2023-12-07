import React, { useState } from 'react';
import './App.css';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextValue, setNextValue] = useState('X');

  function selectSquare(square) {
    if (squares[square] || calculateWinner(squares)) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[square] = nextValue;
    setSquares(newSquares);

    setNextValue(calculateNextValue(newSquares));
  }

  function restart() {
    setSquares(Array(9).fill(null));
    setNextValue('X');
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    );
  }

  return (
    <div className="container">
      <div className="status">
        STATUS: {calculateStatus(calculateWinner(squares), squares, nextValue)}
      </div>
      <div className="board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="mb-4">
        <button
          className="button button-blue"
          onClick={restart}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner ${winner}`
    : squares.every(Boolean)
    ? `Draw `
    : `Next player: ${nextValue}`;
}

function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Game() {
  return (
    <div>
      <Board />
    </div>
  );
}

function App() {
  return <Game />;
}

export default App;
