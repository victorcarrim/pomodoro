import { ThemeProvider } from 'styled-components'
import themes from './styles/themes'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={themes}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
