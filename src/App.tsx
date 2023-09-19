import AppProvider from './Provider/AppProvider'
import { User } from './components'

function App() {

  return (
    <AppProvider>
      <User/>
    </AppProvider>
  )
}

export default App
