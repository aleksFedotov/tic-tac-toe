import styled from 'styled-components';

export const RestartHeader = styled.h2`
  font-size: var(--font-size-heading-l);
  letter-spacing: var(--letter-spacing-heading-l);
  font-weight: var(--font-weight-heading);
  color: var(--color-silver);
  margin-bottom: 3rem;

  @media (max-width: 600px) {
    font-size: var(--font-size-heading-m);
    letter-spacing: var(-letter-spacing-heading-m);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 1.5rem;
  text-transform: uppercase;
  font-family: inherit;
  font-size: var(--font-size-heading-xs);
  font-weight: var(--font-weight-heading);
  letter-spacing: var(--letter-spacing-heading-xs);
  color: var(--color-dark-navy);
  padding: 1.5rem 1.6rem;
  background-color: var(
    ${(props) =>
      props.type === 'cancel' ? '--color-silver' : '--color-light-yellow'}
  );
  box-shadow: 0px 4px
    ${(props) => (props.type === 'cancel' ? '#6B8997' : '#CC8B13')};

  transition: all 0.3s ease;

  &:hover {
    background-color: var(
      ${(props) =>
        props.type === 'cancel'
          ? '--color-silver-hover'
          : '--color-light-yellow-hover'}
    );
  }

  &:active {
    box-shadow: 0px 2px
      ${(props) => (props.type === 'cancel' ? '#118C87' : '#CC8B13')};
    transform: translateY(0.2rem);
  }
`;
