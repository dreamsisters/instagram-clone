import {
  SignBase,
  SignLargeImg,
  SignSmallImg,
  Form,
  Step,
  Certification,
  WhiteButton,
  Button,
  SocialLogins,
} from '../SignUp/styles';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Logo } from '@components/Logo';
import InputLable from '@components/InputLable';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { CheckEmail, CheckPassword } from '@components/CheckValue';
import axios from 'axios';

interface IFormValues {
  username: string;
  password: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onChange',
  });

  const { username, password } = watch();

  const [isEmail, setEmail] = useState(false);
  const [isPassword, setPassword] = useState(false);

  CheckEmail(username, setEmail);
  CheckPassword(password, setPassword);

  //로그인 실패 alert 애니메이션
  let idCertification = false; //id 일치 여부
  let pwCertification = false; //pw 일치 여부
  const [idError, setID] = useState(0);
  const [pwError, setPW] = useState(0);

  useEffect(() => {
    if (idCertification == false) {
      setID(30);
    }
    if (pwCertification == false) {
      setPW(30);
    }
  }, [idCertification, pwCertification]);

  const TransitionEnd = () => {
    setID(0);
    setPW(0);
  };

  const onSubmit = useCallback((data: IFormValues) => {
    console.log(data);

    axios
      .post('/api/users/login', data, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <SignBase>
        <SignLargeImg>
          <img src="../../src-accets/SignLImg.png" />
        </SignLargeImg>
        <Step>
          <Logo path="sign" />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className={'labels'}>
              <label>
                <input type={'text'} {...register('username')} />
                <InputLable isValue={isEmail} text="이메일 주소, 닉네임 혹은 전화번호" />
              </label>
              <Certification onTransitionEnd={TransitionEnd} h={idError}>
                일치하는 계정이 없습니다.
              </Certification>
              <label>
                <input type={'password'} {...register('password')} />
                <InputLable isValue={isPassword} text="비밀번호" />
              </label>
              <Certification onTransitionEnd={TransitionEnd} h={pwError}>
                비밀번호가 틀렸습니다.
              </Certification>
              <Link to="/sign_in" className="resetPW">
                비밀번호를 잊으셨나요?
              </Link>
            </div>
            <Button disabled={false} type={'submit'}>
              로그인
            </Button>
          </Form>
          <Link to="/sign_up" className="toSignIn">
            <WhiteButton>회원 가입</WhiteButton>
          </Link>
          <SocialLogins>
            <img src="../../src-accets/Facebook.png" />
            <img src="../../src-accets/kakao.png" />
          </SocialLogins>
          {/* Logo media query(width: 650px) */}
          <SignSmallImg>
            <img src="../../src-accets/SignSImg.png" />
          </SignSmallImg>
        </Step>
      </SignBase>
    </>
  );
};

export default SignIn;
