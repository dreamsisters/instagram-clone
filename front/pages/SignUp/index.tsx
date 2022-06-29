import {
  SignBase,
  SignLargeImg,
  SignSmallImg,
  Form,
  Step,
  Certification,
  PrevButton,
  WhiteButton,
  Button,
} from './styles';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import CloseMessageModal from '@components/CloseMessageModal';
import InputLable from '@components/InputLable';
import { CheckEmail, CheckName, CheckPassword, CheckNickname } from '@components/CheckValue';
import { Logo } from '@components/Logo';
import axios from 'axios';

interface IFormValues {
  auth: string;
  name: string;
  nickname: string;
  password: string;
}

const SignUp = () => {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      auth: '',
      name: '',
      nickname: '',
      password: '',
    },
    mode: 'onChange',
  });

  const { auth, name, nickname, password } = watch();

  const [isAuth, setAuth] = useState(false);
  const [isName, setName] = useState(false);
  const [isNickname, setNickname] = useState(false);
  const [isPassword, setPassword] = useState(false);

  CheckEmail(auth, setAuth);
  CheckName(name, setName);
  CheckNickname(nickname, setNickname);
  CheckPassword(password, setPassword);

  //Move Step
  const moveToSecond = useCallback(() => {
    setStep1(false);
    setStep2(true);
    setStep3(false);
  }, []);

  const moveToLast = useCallback(() => {
    setStep1(false);
    setStep2(false);
    setStep3(true);
  }, []);

  const moveBackToFirst = useCallback(() => {
    setStep1(true);
    setStep2(false);
    setStep3(false);
  }, []);

  //인증 오류 시 alert 애니메이션
  let certification = false; //인증 여부
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (certification == false) {
      setHeight(30);
    }
  }, [certification]);

  const TransitionEnd = () => {
    setHeight(0);
  };

  //인증번호 재발송
  const reSend = useCallback(() => {}, []);

  //form submit
  const onSubmit = useCallback((data: IFormValues) => {
    console.log(data);

    axios
      .post('/api/users/', data)
      .then((res) => {
        console.log(res.data, 'success');
      })
      .catch((error) => {
        console.error(error);
      });

    moveToSecond();
  }, []);

  // const [payload, setPaylod] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  //payload submit
  const submitPayload = useCallback((e: any) => {
    e.preventDefault();
    const payloadValue = inputRef.current!.value;
    console.log(payloadValue);

    axios
      .post('/api/users/confirm', payloadValue)
      .then((res) => {
        console.log(res.data, 'success');
      })
      .catch((error) => {
        console.error(error);
      });

    moveToLast();
  }, []);

  return (
    <SignBase>
      <SignLargeImg>
        <img src="../../src-accets/SignLImg.png" />
      </SignLargeImg>
      <Step>
        {/* STEP 1 - 기본정보 */}
        <CloseMessageModal show={step1}>
          <Step>
            <div className={'titles'}>
              <Logo path="sign" />
              <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className={'labels'}>
                <label>
                  <input type={'text'} {...register('auth', { required: true })} />
                  <InputLable isValue={isAuth} text="이메일 주소, 닉네임 혹은 전화번호" />
                </label>
                <label>
                  <input type={'text'} {...register('name', { required: true })} />
                  <InputLable isValue={isName} text="성명" />
                </label>
                <label>
                  <input type={'text'} {...register('nickname', { required: true })} />
                  <InputLable isValue={isNickname} text="닉네임" />
                </label>
                <label>
                  <input type={'password'} {...register('password', { required: true })} />
                  <InputLable isValue={isPassword} text="비밀번호" />
                </label>
              </div>
              <Button type={'submit'}>계속 하기</Button>
            </Form>
            <Link to="/sign_in" className="toSignIn">
              <WhiteButton>로그인 페이지로 이동</WhiteButton>
            </Link>
          </Step>
        </CloseMessageModal>

        {/* STEP 2 - 이메일, 전화번호 인증 */}
        <CloseMessageModal show={step2}>
          <PrevButton onClick={moveBackToFirst}>이전으로</PrevButton>
          <Step>
            <div className={'titles'}>
              <p>
                {auth}로 발송된
                <br />
                인증번호 6자리를 입력해주세요.
              </p>
              <p className="step1Auth">010-1xxx-xxx2</p>
            </div>
            <Form onSubmit={submitPayload}>
              <div className={'labels'}>
                <label>
                  <input ref={inputRef} type="text" />
                  <InputLable isValue={isNickname} text="인증번호 6자리" />
                </label>
                <Certification onTransitionEnd={TransitionEnd} h={height}>
                  인증번호가 틀렸습니다.
                </Certification>
              </div>
              <Button type={'submit'}>가입 완료</Button>
            </Form>
            <button type="submit" className="resend">
              인증번호 재발송
            </button>
          </Step>
        </CloseMessageModal>

        {/* STEP 3 - 로그인 완료 */}
        <CloseMessageModal show={step3}>
          <Step>
            <div className={'titles'}>
              <p>회원가입이 완료되었습니다.</p>
            </div>
            <Link to="/sign_in" className="toSignIn">
              <WhiteButton>로그인</WhiteButton>
            </Link>
          </Step>
        </CloseMessageModal>
        <SignSmallImg>
          <img src="../../src-accets/SignSImg.png" />
        </SignSmallImg>
      </Step>
    </SignBase>
  );
};

export default SignUp;
