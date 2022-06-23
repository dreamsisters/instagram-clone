import styled from '@emotion/styled';

export const ImgWrapper = styled.div<{ type: string }>`
  width: ${(props) => (props.type == 'read' ? `450px` : `330px`)};
  height: ${(props) => (props.type == 'read' ? `450px` : `330px`)};
  margin-bottom: 50px;
  border: 1px solid #dfdfdf;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  > .carousel {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    > .item {
      transition: all 0.5s;
    }
  }
  > button {
    position: absolute;
    z-index: 500;
    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }
  }
`;

export const Images = styled.div<{ url: any; move: number }>`
  min-width: 100%;
  height: 100%;

  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;

  transform: translateX(${(props) => props.move + 'px'});
`;

export const ProcessDot = styled.div<{ length: number }>`
  display: ${(props) => (props.length == 1 ? 'none' : 'flex')};
  position: absolute;
  left: 50%;
  bottom: 5px;
  transform: translate(-50%, -50%);
`;

export const Dot = styled.div<{ step: number; index: number }>`
  width: 8px;
  height: 8px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: ${(props) => (props.step == props.index ? `#288eeccb` : `rgba(232, 232, 232, 0.6)`)};
`;
