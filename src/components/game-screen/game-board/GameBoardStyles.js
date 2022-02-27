import styled from 'styled-components';

export const GameBoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.9rem;
  margin: 1.9rem 0 2.7rem;

  @media (max-width: 600px) {
    margin: 6.4rem 0 2.7rem;
  }
`;
