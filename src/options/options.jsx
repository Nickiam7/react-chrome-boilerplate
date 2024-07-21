import React from 'react'
import { createRoot } from 'react-dom/client'

import { AuthContextProvider } from '../context/AuthContext'

import Options from '../pages/Options'

import '../css/index.css'

document.body.setAttribute('id', 'options-page')
const container = document.createElement('main')
document.body.appendChild(container)
const root = createRoot(container)
root.render(
  <AuthContextProvider>
    <Options />
  </AuthContextProvider>
)
