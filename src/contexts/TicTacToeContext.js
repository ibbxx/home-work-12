import { useState, createContext } from 'react';

export const TicTacToeContext = createContext();

export const TicTacToeProvider = ({ children }) => {
  const initialSquares = Array(9).fill(null);

  const [squares, setSquares] = useState(initialSquares);
  const [nextValue, setNextValue] = useState('X');
  const [winner, setWinner] = useState(null);

  const calculateNextValue = (squares) => (squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O');

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  const calculateStatus = (winner, squares, nextValue) =>
    winner
      ? `Winner: ${winner}`
      : squares.every(Boolean)
      ? `Scratch: Cat's game`
      : `Next player: ${nextValue}`;

  const updateGameState = (newSquares) => {
    setSquares(newSquares);
    setNextValue(calculateNextValue(newSquares));
    const newWinner = calculateWinner(newSquares);
    setWinner(newWinner);
  };

  const selectSquare = (square) => {
    if (squares[square] || winner) return;

    const newSquares = [...squares];
    newSquares[square] = nextValue;

    updateGameState(newSquares);
  };

  const restart = () => {
    updateGameState(initialSquares);
  };

  const states = { squares, nextValue, winner };
  const functions = { selectSquare, restart };

  return (
    <TicTacToeContext.Provider value={{ states, functions }}>
      {children}
    </TicTacToeContext.Provider>
  );
};
