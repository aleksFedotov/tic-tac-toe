import styled from 'styled-components';

import { motion } from 'framer-motion';

export const HeaderWrapper = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: center;
`;

export const TurnDisplay = styled.div`
  max-width: 14rem;
  width: 100%;
  background-color: var(--color-semi-dark-navy);
  border-radius: 1rem;
  box-shadow: 0px 4px var(--box-shadow-color);
  font-size: var(--font-size-heading-xs);
  font-weight: var(--font-weight-heading);
  letter-spacing: var(--letter-spacing-body);
  color: var(--color-silver);
  text-transform: uppercase;
  padding: 1.3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .markDisplay {
    width: 2rem;
    height: 2rem;
    margin-right: 1.2rem;
    animation: scaleIn 0.5s ease;
    path {
      fill: var(--color-silver);
    }
  }

  @media (max-width: 600px) {
    font-size: var(--font-size-body);
    padding: 1rem;

    .markDisplay {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  @keyframes scaleIn {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export const RestartBtn = styled.button`
  cursor: pointer;
  border: none;
  width: 5.2rem;
  height: 5.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-silver);
  box-shadow: 0px 4px #6b8997;
  border-radius: 1rem;
  justify-self: end;

  @media (max-width: 600px) {
    width: 4rem;
    height: 4rem;
  }

  svg {
    transition: transform 150ms ease-in;
  }

  &:hover {
    background-color: var(--color-silver-hover);
  }

  &:active {
    transform: translateY(0.2rem);
    box-shadow: 0px 2px #6b8997;

    svg {
      transform: rotate(45deg);
    }
  }
`;
