import styled from 'styled-components';

export const Cell = styled.button`
  border: none;
  max-width: 20rem;

  width: 100%;

  border-radius: 1.5rem;
  background-color: ${(props) => props.bg};
  box-shadow: 0px 8px var(--box-shadow-color);
  cursor: ${(props) => (props.isMarked ? 'auto' : 'pointer')};
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.8rem;
  transition: ${(props) =>
    props.isWinCell ? 'background-color 0.5s ease 0.5s' : 'none'};

  @media (max-width: 600px) {
    padding: 2.4rem;
  }

  .markHover {
    path {
      stroke-width: 0;
      transition: stroke-width ease 0.5s;
    }
  }

  .markSelected {
    animation: markAppear 0.5s ease;
  }

  .winIcon {
    path {
      fill: var(--color-semi-dark-navy);
      transition: all 0.5s ease 0.5s;
    }
  }

  &:hover {
    .markHover {
      path {
        stroke-width: ${(props) => (props['data-cputurn'] ? '0' : '2')};
      }
    }
  }

  &:active {
    box-shadow: ${(props) =>
      props.isMarked || props['data-cputurn']
        ? '0px 8px var(--box-shadow-color)'
        : '0px 4px var(--box-shadow-color)'};
    transform: ${(props) =>
      props.isMarked || props['data-cputurn'] ? 'none' : 'translateY(0.5rem)'};
  }

  @keyframes markAppear {
    0% {
      opacity: 0;
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
