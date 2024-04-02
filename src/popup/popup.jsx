import React from 'react'
import { createRoot } from 'react-dom/client'

const Popup = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>HELLL OOOOOO</h1>
        </div>
      </div>
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<Popup />)
