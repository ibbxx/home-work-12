import Game from './components/Game'
import { TicTacToeProvider } from './contexts/TicTacToeContext'

const App = () => {
  return (
    <TicTacToeProvider>
      <Game />
    </TicTacToeProvider>
  )
}

export default App
