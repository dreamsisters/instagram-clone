import styled from '@emotion/styled';

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.5s;
  /* height: 0%; */
`;

export const ModalInner = styled.div`
  width: 100%;
  height: 90%;
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px 10px 0 0;
  background-color: #fff;
  > .clearBtn {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 10px;
  }
`;
