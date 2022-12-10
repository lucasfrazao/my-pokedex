import { Container, StyledInput } from './styles'

export function Input() {
  return (
    <Container>
      <img src="src/assets/magnifier.png" alt="magnifier icon" />
      <StyledInput type="text" placeholder="Procurar" />
    </Container>
  )
}
