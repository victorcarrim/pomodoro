import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmount,
  Separetor,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label>Vou trabalhar em</label>
          <TaskInput
            id="text"
            type="text"
            placeholder="De um nome para o seu projeto"
            list="task-sugestions"
          />
          <datalist id="task-sugestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmount
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separetor>:</Separetor>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
