import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <div>
        <img src="src/assets/pokeball.png" alt="pokeball icon" />
        <span>Pokédex</span>
      </div>
      <img src="src/assets/sort.png" alt="sort icon" />
    </Container>
  )
}
