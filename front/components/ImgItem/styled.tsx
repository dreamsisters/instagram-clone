import styled from '@emotion/styled';

export const Imagewrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 80%;
  }
  > .drop {
    width: 30%;
    height: 100%;
    position: absolute;
  }
`;

export const DragImg = styled.img`
  width: auto;
  max-height: 100%;
  position: absolute;
`;

export const CloseIcon = styled.button`
  width: 20px;
  height: 20px;
  opacity: 50%;
  border: 1px solid #dfdfdf;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  > .mdIcon {
  }
`;

export const DropLeft = styled.div`
  left: 0;
`;
export const DropRight = styled.div`
  right: 0;
`;
