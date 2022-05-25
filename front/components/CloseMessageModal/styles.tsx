import styled from '@emotion/styled';

export const CreateModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseMessage = styled.div`
  width: 410px;
  /* //height: 220px; */
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
