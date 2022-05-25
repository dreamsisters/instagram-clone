import styled from '@emotion/styled';

export const ModalContent = styled.div`
  min-width: 730px;
  height: 775px;
  background-color: #fff;
  border-radius: 10px;
  //overflow-y: scroll;

  > h1 {
    font-size: 18px;
    font-weight: 500;
    height: 45px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    border-bottom: 1px solid #dfdfdf;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;

  > .user-profile-avartar {
    width: 250px;
    height: 250px;
    background-color: #f2f2f2;
    border-radius: 50%;
    color: #6b6b6b;
    position: relative;
    overflow: hidden;
    > .img {
    }

    > .file-uploader {
      position: absolute;
      //bottom: 30px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      width: 100%;
      height: 45px;
      opacity: 0;
      transition: 0.2s ease;
      > label {
        background-color: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 13px;
        padding-bottom: 8px;
      }

      & input {
        display: none;
      }
    }

    &:hover {
      > .file-uploader {
        opacity: 1;
      }
    }
  }

  > .user-profile-desc {
    display: flex;
    flex-direction: column;
    width: 60%;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    > label {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      width: 360px;

      > span {
        font-size: 14px;
        margin-bottom: 4px;
      }
      > input,
      textarea {
        padding: 8px 5px;
        border: 1px solid #dfdfdf;
        resize: none;
        &:focus {
          outline: none;
        }
      }
    }
  }
`;

export const Button = styled.button<{ disabled: boolean }>`
  width: 30%;
  padding: 10px;
  background-color: ${(props) => (props.disabled ? '' : '#fff')};
  border: 1px solid ${(props) => (props.disabled ? '#dfdfdf' : '#191919')};
  color: ${(props) => (props.disabled ? '#878787' : '#191919')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;
