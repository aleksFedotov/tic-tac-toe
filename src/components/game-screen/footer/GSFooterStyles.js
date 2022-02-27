import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const ScoreCard = styled.div`
  width: 100%;
  border-radius: 1.5rem;
  padding: 1.2rem 1rem;
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

  @media (max-width: 600px) {
    h3 {
      font-size: var(--font-size-body-mobile);
    }

    p {
      font-size: var(--font-size-heading-s);
    }
  }
`;
