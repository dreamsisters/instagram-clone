import React, { FC, useCallback, useEffect, useState } from 'react';
import { Button } from './styled';
import { MdKeyboardArrowLeft as LeftBtn, MdKeyboardArrowRight as RightBtn } from 'react-icons/md';

interface IProps {
  name?: string; //버튼 옆 이름은 선택사항
  dt?: DataTransfer; //dt 선택사항
  onClick?: () => void;
  setFile?: React.Dispatch<any>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  move?: number;
  setMove?: React.Dispatch<React.SetStateAction<number>>;
  length?: number;
  width?: string;
  stepObj?: any; //setpType: string, value: number, length
}

export const LeftArrow: FC<IProps> = ({ name, dt, stepObj, setFile, setStep, move, setMove, width }) => {
  const [show, setShow] = useState(true);
  let files: any = [];

  useEffect(() => {
    if (stepObj.stepType == 'albumStep') {
      if (stepObj.value == 1) {
        setShow(false);
      } else if (stepObj.value != 1) {
        setShow(true);
      }
    }
  }, [stepObj.value]);

  const leftClick = () => {
    //AddPost의 leftButton일 경우
    if (stepObj?.stepType == 'postStep') {
      // step2,3에서 초기화 confirm
      if (stepObj.value == 2) {
        if (confirm('작성중인 내용이 사라집니다.')) {
          setStep((stepObj.value -= 1));
          dt?.items.clear();
          setFile!(files);
          console.log('clear');
        }
      }
      if (stepObj.value == 3) {
        if (confirm('작성중인 내용이 사라집니다.')) {
          setStep((stepObj.value -= 1));
          //Step3. textarea reset
        }
      }
    }
    //이미지 carousel일 경우
    else if (stepObj?.stepType == 'albumStep') {
      console.log('prev');
      setStep((stepObj.value -= 1));
      if (width == 'read') {
        setMove!((move! += 448));
      }
      if (width == '') {
        setMove!((move! += 328));
      }
    }
  };
  return (
    <Button type="button" onClick={leftClick} step={stepObj.value} show={show} className="left">
      <LeftBtn className="mdArrow" />
      {name}
    </Button>
  );
};

export const RightArrow: FC<IProps> = ({ name, stepObj, setStep, length, move, width, setMove }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (stepObj.stepType == 'albumStep') {
      // console.log(length);
      if (length == 1) {
        console.log('length 1');
        setShow(false);
      } else if (stepObj.value == stepObj.length) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
  }, [stepObj.value, width]);

  const rightClick = () => {
    if (stepObj?.stepType == 'postStep') {
      setStep!((stepObj.value += 1));
    } else if (stepObj?.stepType == 'albumStep') {
      console.log('next');
      setStep((stepObj.value += 1));
      if (width == 'read') {
        setMove!((move! -= 448));
      }
      if (width == '') {
        setMove!((move! -= 328));
      }
    }
  };

  return (
    <Button type="button" onClick={rightClick} step={stepObj.value} show={show} className="right">
      {name}
      <RightBtn className="mdArrow" />
    </Button>
  );
};
