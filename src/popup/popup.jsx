import { createRoot } from 'react-dom/client'

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>HELLL OOOOOO</h1>
          <button className="btn btn-success">
            Data
          </button>
        </div>
      </div>
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
