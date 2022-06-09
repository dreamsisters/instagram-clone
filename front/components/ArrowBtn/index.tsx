import React, { FC, useEffect, useState } from 'react';
import { Button } from './styled';
import { MdKeyboardArrowLeft as LeftBtn, MdKeyboardArrowRight as RightBtn } from 'react-icons/md';

interface IProps {
  name?: string; //버튼 옆 이름은 선택사항
  onClick?: () => void;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  step: number;
  length?: number;
}

export const LeftArrow: FC<IProps> = ({ name, step, setStep }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (step == 1) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [step]);

  function leftClick() {
    setStep((step -= 1));
    console.log(step);
  }
  return (
    <Button onClick={leftClick} step={step} show={show} className="left">
      <LeftBtn className="mdArrow" />
      {name}
    </Button>
  );
};

export const RightArrow: FC<IProps> = ({ name, step, setStep, length }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (step == length) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [step]);

  function rightClick() {
    setStep((step += 1));
    console.log(step);
  }
  return (
    <Button onClick={rightClick} step={step} show={show} className="right">
      {name}
      <RightBtn className="mdArrow" />
    </Button>
  );
};
