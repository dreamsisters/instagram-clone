import React, { FC, useEffect, useState } from 'react';
import { Button } from './styled';
import { MdKeyboardArrowLeft as LeftBtn, MdKeyboardArrowRight as RightBtn } from 'react-icons/md';

interface IProps {
  name?: string; //버튼 옆 이름은 선택사항
  onClick?: () => void;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  length?: number;
  stepObj?: any; //setpType: string, value: number
}

export const LeftArrow: FC<IProps> = ({ name, stepObj, setStep }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (stepObj.value == 1) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [stepObj.value]);

  function leftClick() {
    if (stepObj?.stepType == 'postStep') {
      //AddPost의 leftButton일 경우
      if (stepObj.value == 2 || stepObj.value == 3) {
        // step2,3에서 초기화 confirm
        if (confirm('작성중인 내용이 사라집니다.')) {
          setStep((stepObj.value -= 1)); //확인 후 step 이동 및 이전 내용 초기화
          //Todo Step2. FileList reset & Step3. textarea reset
        }
      }
    } else if (stepObj?.stepType == 'carousel') {
      //이미지 carousel일 경우
      setStep((stepObj.value -= 1));
    }
  }
  return (
    <Button onClick={leftClick} step={stepObj.value} show={show} className="left">
      <LeftBtn className="mdArrow" />
      {name}
    </Button>
  );
};

export const RightArrow: FC<IProps> = ({ name, stepObj, setStep, length }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (stepObj.value == length) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [stepObj.value]);

  function rightClick() {
    setStep!((stepObj.value += 1));
  }
  return (
    <Button onClick={rightClick} step={stepObj.value} show={show} className="right">
      {name}
      <RightBtn className="mdArrow" />
    </Button>
  );
};
