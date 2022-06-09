import React from 'react';

interface IProps {
  length: number;
  step: number;
  leftStyle: React.Dispatch<React.SetStateAction<boolean>>;
  rightStyle: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Carousel({ length, step, leftStyle, rightStyle }: IProps) {
  if (step == 0) {
    leftStyle(false);
  }
  if (step == length) {
    rightStyle(false);
  }
  if (step < length) {
    leftStyle(true);
    rightStyle(true);
  }
}
