import { createRoot } from 'react-dom/client'

const App = () => {
  return (
    <div>
      <h1>HELLO FROM OPTIONS</h1>
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
