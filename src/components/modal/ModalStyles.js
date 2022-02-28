import styled from 'styled-components';

import { motion } from 'framer-motion';

export const BackDropWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalOverlayWrapper = styled(motion.div)`
  min-height: 26.6rem;
  width: 100%;
  background-color: var(--color-semi-dark-navy);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
`;

export const ContentWrapper = styled.div`
  text-transform: uppercase;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      props.type === 'silver' ? '--color-silver' : '--color-light-yellow'}
  );
  box-shadow: 0px 4px
    ${(props) => (props.type === 'silver' ? '#6B8997' : '#CC8B13')};

  transition: all 0.3s ease;

  &:hover {
    background-color: var(
      ${(props) =>
        props.type === 'silver'
          ? '--color-silver-hover'
          : '--color-light-yellow-hover'}
    );
  }

  &:active {
    box-shadow: 0px 2px
      ${(props) => (props.type === 'silver' ? '#118C87' : '#CC8B13')};
    transform: translateY(0.2rem);
  }
`;
