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

export const PrevButton = styled.button`
  margin-left: 50px;
  color: #878787;
  font-weight: 600;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: #000;
  }
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
  > .PrevButton {
    cursor: pointer;
    color: #878787;

    &:hover {
      color: #000;
    }
  }
  > a {
    width: 80%;
    text-decoration: none;
    text-align: center;
    border-radius: 10px;
    &:hover:not(.linkA) {
      background-color: #ededed;
    }
  }
  > .resend {
    margin-top: 20px;
    border: none;
    text-decoration: underline;
    color: #878787;
    background-color: #fff;
    font-size: 0.9rem;
    cursor: pointer;
  }
  > .titles {
    text-align: center;
    margin-bottom: 30px;
    > p {
      padding-top: 15px;
      color: #878787;
    }
    > .step1Auth {
      font-size: 0.8rem;
    }
  }
`;

export const Form = styled.form`
  width: 80%;
  > .labels {
    margin-bottom: 30px;
    & label {
      margin-bottom: 5px;
      display: flex;
      align-items: center;

      > input:focus ~ p {
        font-size: 10px;
        transform: translateY(-12px);
      }
      > input {
        width: 100%;
        height: 40px;
        padding: 5px 10px 0 10px;
        border: 1px solid #dfdfdf;
        border-radius: 5px;
      }
    }
    > .resetPW {
      text-decoration: underline;
      text-align: center;
    }
  }
  > .toSignIn {
    text-decoration: none;
  }
`;

export const Certification = styled.div<{ h: number }>`
  max-height: ${(props) => props.h};
  width: 100%;
  margin-bottom: 15px;
  text-align: center;
  color: #ff4a4a;
  font-size: 0.8rem;
  overflow: hidden;
  transition: all 1.5s ease;
`;

export const Button = styled.button<{ disabled?: boolean }>`
  padding: 10px;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid #dfdfdf;
  background-color: #45a5ff;
  color: ${(props) => (props.disabled ? '#878787' : '#fff')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: pointer;
  &:hover {
    opacity: 70%;
  }
`;

export const WhiteButton = styled.div`
  padding: 8px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  text-align: center;
`;

export const SocialLogins = styled.ul`
  width: 100px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  > a {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;
