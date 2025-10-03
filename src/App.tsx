import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import Home from './components/Home'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <main className="mx-auto flex min-h-screen w-1/3 flex-col gap-8 py-10">
      <Home />
    </main>
  )
}

export default App
