import styled from '@emotion/styled';

export const ModalContent = styled.div`
  min-width: 730px;
  height: 775px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  > h1 {
    font-size: 18px;
    font-weight: 500;
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    border-bottom: 1px solid #dfdfdf;
    position: relative;
    > .dir-button {
      position: absolute;
      font-size: 16px;
      cursor: pointer;
    }

    > .left-button {
      left: 20px;
    }

    > .right-button {
      right: 20px;
    }
  }

  > form {
    height: 730px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;

  > .image-upload-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(-45px);

    > p {
      font-size: 20px;
      font-weight: 300;
      margin-bottom: 20px;
    }

    > .upload-button {
      padding: 5px 10px;
      border-radius: 4px;
      background-color: #0295f6;
      color: #fff;
      cursor: pointer;
      font-size: 14px;
      &:active {
        opacity: 0.7;
      }
    }
  }

  > button {
    position: absolute;
    top: 14px;
    right: 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  > label {
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
  }

  > .images-section {
    width: 730px;
    height: 100%;
    position: relative;
  }

  > .contents-section {
    width: 380px;
    height: 100%;
    border-left: 1px solid #dfdfdf;
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }
`;

export const ContentsSection = styled.section`
  > .user-profile {
    //height: 50px;
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    > .user-avartar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 10px;
      background-color: #fafafa;
      border: 1px solid #dfdfdf;
    }

    > span {
      font-size: 16px;
      font-weight: 500;
    }
  }

  & textarea {
    border: none;
    padding: 0 20px;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
    resize: none;
    &:focus {
      outline: none;
    }
  }

  > .textarea {
    width: 100%;
    height: 300px;
    background-color: #fafafa;
    border-bottom: 1px solid #dfdfdf;

    > textarea {
      width: 100%;
      height: 100%;
    }
  }

  > .hashtags,
  .location,
  .optional-settings {
    height: 50px;
    border-bottom: 1px solid #dfdfdf;
    > input,
    span {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0 20px;
      border: none;
      font-size: 15px;

      &:focus {
        outline: none;
      }
    }

    > span {
      display: flex;
      align-items: center;
    }
  }
`;
