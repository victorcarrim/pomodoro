import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <tr>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </tr>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20min</td>
              <td>há 3 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20min</td>
              <td>há 3 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20min</td>
              <td>há 3 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20min</td>
              <td>há 3 meses</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
