import styled from '@emotion/styled';

export const Button = styled.button<{ show: boolean; step: number; length?: number }>`
  border: none;
  background: none;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: center;
  > .mdArrow {
    width: 35px;
    height: 35px;
  }
`;
