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
  }
`;

export const AddPostStep = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Step = styled.div<{ show: boolean }>`
  width: 100%;
  max-width: 1000px;
  display: ${(props) => (props.show == true ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  > button {
    border: none;
    background: none;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  ${(props) => (props.className == 'step3' ? `flex-direction: column;` : null)};
  > .step3Box {
    display: flex;
    align-items: flex-start;
  }
`;

export const Form = styled.form`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    > input {
      display: none;
    }
  }
`;

export const PostPreview = styled.div`
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
  > .previewBox {
    width: 500px;
    height: 100px;
    border: 1px solid #dfdfdf;
    border-radius: 1px;
    display: flex;
    align-items: center;
    > .album {
      width: 85%;
    }
    > .plusIcon {
      width: 55px;
      height: 55px;
      padding: 5px;
      border: 1px solid #dfdfdf;
      border-radius: 50%;
    }
  }
`;

export const Images = styled.div`
  width: 330px;
  height: 330px;
  margin-bottom: 50px;
  background-color: #dfdfdf;
`;

export const PostText = styled.div`
  width: 400px;
  height: 350px;
`;
