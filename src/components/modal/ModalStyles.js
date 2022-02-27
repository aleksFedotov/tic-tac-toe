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
  /* animation: slide-down 300ms ease-out forwards; */
  z-index: 30;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ContentWrapper = styled.div`
  text-transform: uppercase;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
