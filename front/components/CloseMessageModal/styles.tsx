import styled from '@emotion/styled';

export const CreateModal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseMessage = styled.div`
  width: 410px;
  //height: 220px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  > .title {
    padding: 30px 0;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
  }

  > button {
    padding: 15px 0;
    border: none;
    border-top: 1px solid #dfdfdf;
    background-color: #fff;
  }

  > .delete {
    color: red;
    font-weight: 600;
  }
`;
