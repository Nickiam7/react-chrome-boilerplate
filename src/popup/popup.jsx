import React from 'react'
import { createRoot } from 'react-dom/client'

import { AuthContextProvider } from '../context/AuthContext'

import Popup from '../pages/Popup'

document.body.setAttribute('id', 'popup-page')
const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(
  <AuthContextProvider>
    <Popup />
  </AuthContextProvider>
)
