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
    width: 50%;
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
  z-index: 1000;
  > .mdIcon {
  }
`;

export const DropLeft = styled.div`
  padding: 10px 0 10px 10px;
  left: 0;
  background-color: rgba(255, 123, 123, 0.5);
`;
export const DropRight = styled.div`
  padding: 10px 10px 10px 0;
  right: 0;
  background-color: rgba(225, 225, 123, 0.5);
`;
