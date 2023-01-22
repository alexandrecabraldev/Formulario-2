import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {GlobalStyle} from "./componensts/Default/Global"
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './componensts/Default/DefaultTheme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
