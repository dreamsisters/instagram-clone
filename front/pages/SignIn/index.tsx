import { SignBase, SignLargeImg, SignSmallImg, Form, Step, WhiteButton, Button, SocialLogins } from '../SignUp/styles';
import React, { useCallback, useMemo, useState } from 'react';
import { Logo } from '@components/Logo';
import InputLable from '@components/InputLable';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { CheckEmail, CheckPassword } from '@components/CheckValue';

interface IFormValues {
  email: string;
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
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const { email, password } = watch();

  const [isEmail, setEmail] = useState(false);
  const [isPassword, setPassword] = useState(false);

  CheckEmail(email, setEmail);
  CheckPassword(password, setPassword);

  const onSubmit = useCallback((data: IFormValues) => {
    console.log(data);
  }, []);

  return (
    <>
      <SignBase>
        <SignLargeImg>
          <img src="../../src-accets/SignLImg.png" />
        </SignLargeImg>
        <Step>
          <Logo />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className={'labels'}>
              <label>
                <input type={'email'} {...register('email')} />
                <InputLable isValue={isEmail} text="이메일 주소" />
              </label>
              <label>
                <input type={'password'} {...register('password')} />
                <InputLable isValue={isPassword} text="비밀번호" />
              </label>
              <Link to="/">비밀번호를 잊으셨나요?</Link>
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
