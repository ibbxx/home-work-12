import Board from './Board'

const Game = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#47b5ff]">
      <div className="rounded-lg shadow-lg p-20 bg-[#dff6ff]">
        <Board />
      </div>
    </div>
  )
}

export default Game
