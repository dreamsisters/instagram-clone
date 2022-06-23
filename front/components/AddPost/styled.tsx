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
`;

export const PostPreview = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  resize: none;
`;
