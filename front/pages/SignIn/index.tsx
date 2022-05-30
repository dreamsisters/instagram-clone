import { SignBase, SignLargeImg, SignSmallImg, Form, Step, WhiteButton, Button, SocialLogins } from '../SignUp/styles';
import React, { useCallback, useMemo, useState } from 'react';
import Logo from '@components/Logo';
import { useForm } from 'react-hook-form';

interface IFormValues {
  email: string;
  password: string;
}

const SignIn = () => {
  const [show, setShow] = useState(true);
  // const style = useMemo(() => ({ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }), []);
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

  // const onCloseModal = useCallback(() => {
  //   setShow(false);
  // }, []);

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
              <input type={'text'} {...register('email')} placeholder={'전화번호, 사용자 이름 또는 이메일'} />
              <input type={'text'} {...register('password')} placeholder={'비밀번호'} />
              <a href="/">비밀번호를 잊으셨나요?</a>
            </div>
            <Button disabled={false} type={'submit'}>
              로그인
            </Button>
          </Form>
          <a href="/sign_up">
            <WhiteButton>회원 가입</WhiteButton>
          </a>
          <SocialLogins>
            <img src="../../src-accets/Facebook.png" />
            <img src="../../src-accets/kakao.png" />
          </SocialLogins>
          <SignSmallImg>
            <img src="../../src-accets/SignSImg.png" />
          </SignSmallImg>
        </Step>
      </SignBase>
    </>
  );
};

export default SignIn;
