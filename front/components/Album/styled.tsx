import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const opacity = keyframes`
  0% {opacity: 1;}
  60% {opacity: 1;}
  100% {
    opacity: 0;
    z-index: -10;
  }
`;

export const TagAlert = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 50%;
  text-align: center;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  animation: ${opacity} 1.5s ease-in;
`;

export const ImgWrapper = styled.div<{ type: string }>`
  width: ${(props) => (props.type == 'create' ? `450px` : `330px`)};
  height: ${(props) => (props.type == 'create' ? `450px` : `330px`)};
  margin-bottom: ${(props) => (props.type == 'create' ? `` : `50px`)};
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
