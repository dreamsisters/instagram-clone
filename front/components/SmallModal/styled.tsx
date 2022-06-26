import styled from '@emotion/styled';

export const ModalOverlay = styled.div<{ show: boolean }>`
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  overflow: hidden;
  display: ${(props) => (props.show == true ? 'flex' : 'none')};
  justify-content: center;
  z-index: 400;
`;

export const ModalWrapper = styled.div`
  width: 1200px;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 450;
`;

export const ModalInner = styled.div`
  width: 250px;
  height: auto;
  position: absolute;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #dfdfdf;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  z-index: 500;
`;
