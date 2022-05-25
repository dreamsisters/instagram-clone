import styled from '@emotion/styled';

export const SignBase = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const SignLargeImg = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 650px) {
    display: none;
  }
  > img {
    width: 65%;
    min-width: 300px;
  }
`;
export const SignSmallImg = styled.div`
  display: none;
  @media (max-width: 650px) {
    display: block;
    > img {
      width: 200px;
    }
  }
`;

export const ModalInner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
`;

export const Step = styled.div`
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > * {
    margin: 10px 0;
  }
  > .titles {
    text-align: center;
    margin-bottom: 60px;
    > .previous-button {
      position: absolute;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
        color: blue;
      }
    }
    > h1 {
      font-size: 22px;
      margin-bottom: 10px;
      font-weight: 600;
      padding-top: 30px;
    }

    > p {
      font-size: 18px;
      color: #878787;
      font-weight: 600;
    }
  }
`;

export const Form = styled.form`
  width: 80%;
  > .labels {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    > label {
      margin-bottom: 10px;
      > span {
        font-size: 13px;
        display: block;
        margin-bottom: 4px;
      }
      > input {
        width: 100%;
        padding: 10px;
        border: 1px solid #dfdfdf;
        border-radius: 10px;
        &:focus {
          outline: none;
        }
      }
    }
  }
`;

export const Button = styled.button<{ disabled: boolean }>`
  padding: 10px;
  width: 100%;
  font-weight: 600;
  border-radius: 10px;
  border: 1px solid ${(props) => (props.disabled ? '#dfdfdf' : 'rgba(0, 0, 0, 0.3)')};
  background-color: ${(props) => (props.disabled ? '#f2f2f2' : '#2F9BFF')};
  color: ${(props) => (props.disabled ? '#878787' : '#fff')};
`;

export const SocialLogins = styled.ul`
  width: 100px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  > img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;
