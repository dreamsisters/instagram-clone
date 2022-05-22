import styled from '@emotion/styled';

export const Base = styled.div`
  width: 100vw;
  height: 100vh;
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
  min-height: 800px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
  border: 1px solid ${(props) => (props.disabled ? '#dfdfdf' : '#191919')};
  background-color: ${(props) => (props.disabled ? 'f2f2f2' : '#fff')};
  color: ${(props) => (props.disabled ? '#878787' : '#191919')};
`;

export const SocialLogins = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  > li {
    width: 40px;
    height: 40px;
    background-color: #f2f2f2;
    border-radius: 50%;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: 10px;
  }
  > li:last-child {
    margin: 0;
  }
`;
