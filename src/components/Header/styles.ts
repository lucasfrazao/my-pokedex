import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-size: 1.5rem;
    font-weight: bold;
    color: var(--dark-gray);
  }

  img {
    width: 1.5rem;
    margin-right: 1rem;
  }
`
