import styled from 'styled-components';

export const Header = styled.h2`
  font-size: var(--font-size-heading-m);
  font-weight: var(--font-size-heading-m);
  letter-spacing: var(--letter-spacing-heading-m);
  color: var(--color-silver);
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

export const DifficultyList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-transform: uppercase;
`;

export const DifficultyItem = styled.li`
  position: relative;

  width: fit-content;
  cursor: pointer;
  font-size: var(--font-size-heading-m);
  font-weight: var(--font-weight-heading);
  letter-spacing: var(--letter-spacing-heading-m);
  color: var(--color-silver);
  opacity: 0.5;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: -0.5rem;
    left: 0;
    background-color: var(--color-silver-hover);
    transform-origin: center;
    transition: transform 0.4s ease-out;
  }

  &:hover {
    color: var(--color-silver-hover);
    opacity: 1;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
