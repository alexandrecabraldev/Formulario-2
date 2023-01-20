import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {GlobalStyle} from "./Global"
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './DefaultTheme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
