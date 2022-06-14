import styled from '@emotion/styled';

export const DragWrapper = styled.div`
  width: 500px;
  /* height: 100px; */
  border: 1px solid #dfdfdf;
  border-radius: 1px;
  display: flex;
  align-items: center;
  > label {
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

export const DragBox = styled.div`
  width: 85%;
  padding: 10px;
  display: flex;
`;

export const Imagewrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DragImg = styled.img`
  width: auto;
  max-height: 100%;
  position: absolute;
`;

export const CloseIcon = styled.button`
  width: 20px;
  height: 20px;
  border: 1px solid #dfdfdf;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  > .mdIcon {
  }
`;
