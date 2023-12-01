import { useContext } from 'react';
import { TicTacToeContext } from '../contexts/TicTacToeContext';

const Board = () => {
  const { states, functions } = useContext(TicTacToeContext);
  const { status } = states;
  const { restart, renderSquare } = functions;

  const renderRow = (row) => (
    <div key={row} className="flex flex-col">
      {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 font-bold text-xl">{status}</div>
      <div className="flex">{[0, 1, 2].map((row) => renderRow(row))}</div>
      <button
        className="mt-4 px-4 py-2 bg-[#1363df] border border-transparent rounded-md font-semibold text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={restart}
      >
        Restart
      </button>
    </div>
  );
};

export default Board;
