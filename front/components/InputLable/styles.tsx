import styled from '@emotion/styled';

export const Lable = styled.p<{ isValue: boolean }>`
  position: absolute;
  color: #989898;
  font-size: ${(props) => (props.isValue == true ? `10px` : `14px`)};
  transform: ${(props) => (props.isValue == true ? `translateY(-12px)` : ``)};
  padding-left: 10px;
  transition: all 0.3s;
`;
