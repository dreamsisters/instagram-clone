import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  > h3 {
    width: 98%;
    font-weight: 400;
    text-align: center;
  }
  > .mdIcon {
    width: 20%;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;

export const AddPostStep = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Step = styled.div<{ show: boolean; className?: string }>`
  width: 100%;
  max-width: 1000px;
  display: ${(props) => (props.show == true ? 'flex' : 'none')};
  flex-direction: ${(props) => (props.className == 'step2' ? 'row' : 'column')};
  justify-content: center;
  align-items: ${(props) => (props.className == 'step3' ? 'flex-start' : 'center')};
  > .step2 {
    flex-direction: row;
    > div {
      display: flex;
      align-items: flex-start;
    }
  }
  > .mdIcon {
    width: 150px;
    height: 150px;
    opacity: 50%;
    margin-bottom: 50px;
  }
  /* input register test */
  /* > #fileInput {
    width: 260px;
    color: #fff;
    text-align: center;
    background-color: #2f9bff;
    padding: 6px 30px;
    border-radius: 5px;
    cursor: pointer;
  } */
  > label {
    width: 260px;
    color: #fff;
    text-align: center;
    background-color: #2f9bff;
    padding: 6px 30px;
    border-radius: 5px;
    cursor: pointer;
    > input {
      display: none;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const opaticy = keyframes`
  0% {opacity: 1;}
  100% {opacity: 0;}
`;

export const PostPreview = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  > .postText {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    > .postOption {
      display: flex;
      > button {
        display: flex;
        align-items: center;
        > .mdIcon {
          width: 40px;
          height: 40px;
        }
      }
    }
    > button {
      /* width: ; */
    }
  }
`;

export const ImgPreview = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    width: 100;
    height: 100;
  }
`;

export const Textarea = styled.textarea`
  width: 300px;
  height: 350px;
  padding: 5px;
  resize: none;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  margin-bottom: 20px;
`;
