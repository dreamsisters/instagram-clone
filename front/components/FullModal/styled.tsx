import styled from '@emotion/styled';

export const ModalOverlay = styled.div<{ show: boolean }>`
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  overflow: hidden;
  display: ${(props) => (props.show == true ? 'flex' : 'none')};
  /* display: flex; */
  justify-content: center;
  z-index: 900;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: flex-end;
  z-index: 950;
`;

export const ModalInner = styled.div`
  width: 100%;
  height: 90%;
  position: absolute;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #dfdfdf;
  /* box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15); */
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;
