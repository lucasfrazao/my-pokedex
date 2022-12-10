import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--light-gray);
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-top: 0.5rem;

  img {
    width: 0.75rem;
    margin-right: 1rem;
    margin-left: 0.5rem;
  }
`

export const StyledInput = styled.input`
  border: none;
  width: 100%;

  font-family: 'Poppins', sans-serif;

  ::placeholder {
    color: var(--light-gray);
  }

  :focus {
    outline: none;
  }
`
