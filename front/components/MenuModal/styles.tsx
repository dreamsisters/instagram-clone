import styled from '@emotion/styled';

export const ModalOverlay = styled.div<{ show: boolean }>`
  display: ${(show) => (show ? 'flex' : 'none')};
  justify-content: center;
  position: fixed;
  top: 50;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* > div {
    z-index: 1000;
    margin: auto;
    position: relative;
    
    > div {
      position: absolute;
      background-color: #fff;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      border-radius: 5px;
    }
  } */
`;

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const ModalInner = styled.div`
  position: absolute;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  padding: 10px;
`;
