import React, { FC, useEffect, useState } from 'react';
import { Button } from './styled';
import { MdKeyboardArrowLeft as LeftBtn, MdKeyboardArrowRight as RightBtn } from 'react-icons/md';

interface IProps {
  name?: string; //버튼 옆 이름은 선택사항
  onClick?: () => void;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  move?: number;
  setMove?: React.Dispatch<React.SetStateAction<number>>;
  length?: number;
  stepObj?: any; //setpType: string, value: number
}

export const LeftArrow: FC<IProps> = ({ name, stepObj, setStep, move, setMove }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (stepObj.value == 1) {
      setShow(false);
    } else if (stepObj.value != 1) {
      setShow(true);
      console.log(show);
    }
  }, [stepObj.value]);

  function leftClick() {
    //AddPost의 leftButton일 경우
    if (stepObj?.stepType == 'postStep') {
      if (stepObj.value == 2 || stepObj.value == 3) {
        // step2,3에서 초기화 confirm
        if (confirm('작성중인 내용이 사라집니다.')) {
          setStep((stepObj.value -= 1)); //확인 후 step 이동 및 이전 내용 초기화
          //Todo Step2. FileList reset & Step3. textarea reset
        }
      }
    }
    //이미지 carousel일 경우
    else if (stepObj?.stepType == 'albumStep') {
      console.log('prev');
      setStep((stepObj.value -= 1));
      setMove!((move! += 331));
    }
  }
  return (
    <Button onClick={leftClick} step={stepObj.value} show={show} className="left">
      <LeftBtn className="mdArrow" />
      {name}
    </Button>
  );
};

export const RightArrow: FC<IProps> = ({ name, stepObj, setStep, length, move, setMove }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (stepObj.value == length) {
      setShow(false);
    } else if (stepObj.value != length) {
      setShow(true);
    }
  }, [stepObj.value]);

  function rightClick() {
    if (stepObj?.stepType == 'postStep') {
      setStep!((stepObj.value += 1));
    } else if (stepObj?.stepType == 'albumStep') {
      console.log('next');
      setStep((stepObj.value += 1));
      setMove!((move! -= 331));
    }
  }
  return (
    <Button onClick={rightClick} step={stepObj.value} show={show} className="right">
      {name}
      <RightBtn className="mdArrow" />
    </Button>
  );
};
