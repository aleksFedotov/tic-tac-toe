import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.9rem;
`;

export const ScoreCard = styled.div`
  width: 100%;
  border-radius: 1.5rem;
  padding: 1.3rem 1rem 1.1rem;
  text-align: center;
  color: var(--color-dark-navy);
  background-color: var(${(props) => `--color-${props.bgColor}`});
  text-transform: uppercase;

  h3 {
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-body);
    letter-spacing: var(--letter-spacing-body);
  }

  p {
    font-size: var(--font-size-heading-m);
    font-weight: var(--font-weight-heading);
    letter-spacing: var(---letter-spacing-heading-m);
  }
`;
