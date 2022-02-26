import styled from 'styled-components';

export const SetupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 48rem;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const MarkPicker = styled.div`
  padding: 2.4rem;
  background-color: var(--color-semi-dark-navy);
  border-radius: 2rem;
  box-shadow: 0px 8px var(--box-shadow-color);
  margin: 4rem 0;
  text-align: center;
  color: var(--color-silver);
  text-transform: uppercase;
`;

export const Header = styled.h1`
  font-size: var(--font-size-heading-xs);
  font-weight: var(--font-weight-heading);
`;

export const MarkWrapper = styled.div`
  display: flex;
  border-radius: 1rem;
  padding: 0.8rem 0.9rem;
  background-color: var(--color-dark-navy);
  margin: 2.4rem 0 1.7rem;
`;

export const Mark = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${(props) =>
    props.firstPlayerChoice ? 'var(--color-silver)' : 'transparent'};
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  padding: 11px 0;
  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.firstPlayerChoice
        ? 'var(--color-silver)'
        : 'rgba(168, 191, 201, 0.05)'};

    .mark {
      path {
        fill: ${(props) =>
          props.firstPlayerChoice
            ? 'var(--color-dark-navy)'
            : 'var(--color-silver)'};
      }
    }
  }

  .mark {
    height: 3.2rem;
    width: 3.2rem;
    path {
      fill: ${(props) =>
        props.firstPlayerChoice
          ? 'var(--color-dark-navy)'
          : 'var(--color-dark-navy)'};
    }
  }
`;

export const Info = styled.p`
  font-size: var(-font-size-body);
  line-height: 1rem;
  letter-spacing: var(--letter-spacing-body);
  opacity: 0.5;
`;

export const ModeButton = styled.button`
  cursor: pointer;
  width: 100%;
  border-radius: 1.5rem;
  border: none;
  background-color: ${(props) =>
    props.mode === 'pvp'
      ? 'var(--color-light-blue)'
      : 'var(--color-light-yellow)'};

  box-shadow: 0px 8px
    ${(props) => (props.mode === 'pvp' ? '#118C87' : '#CC8B13')};

  text-transform: uppercase;
  font-size: var(--font-size-heading-s);
  font-weight: var(--font-weight-heading);
  color: var(--color-dark-navy);
  padding: 1.7rem 1rem;
  margin-bottom: 2rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) =>
      props.mode === 'pvp'
        ? 'var(--color-light-blue-hover)'
        : 'var(--color-light-yellow-hover)'};
  }

  &:active {
    transform: translateY(0.5rem);
    box-shadow: 0px 4px
      ${(props) => (props.mode === 'pvp' ? '#118C87' : '#CC8B13')};
  }
`;
