import styled from '@emotion/styled';

export const DragWrapper = styled.div`
  width: 500px;
  /* height: 100px; */
  border: 1px solid #dfdfdf;
  border-radius: 1px;
  display: flex;
  align-items: center;
  > label {
    margin: 7px;
    > .plusIcon {
      width: 55px;
      height: 55px;
      padding: 5px;
      border: 1px solid #dfdfdf;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  > #addFile {
    display: none;
  }
`;
