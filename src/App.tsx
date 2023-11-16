import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="sucess" />
      <Button variant="danger" />
      <Button />
      <Button variant="secondary" />
      <Button variant="primary" />
      <GlobalStyle />
    </ThemeProvider>
  )
}