import React from 'react'

import { createRoot } from 'react-dom/client'
import App from './App'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

const store = configureStore({ reducer: reducers })

const theme = createTheme()

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
)
