import { Base, Form, Step, Button, SocialLogins } from '../SignUp/styles';
import React, { useCallback, useMemo, useState } from 'react';
import CloseAlertModal from '@components/CloseMessageModal';
import { useForm } from 'react-hook-form';

interface IFormValues {
  email: string;
  password: string;
}

const SignIn = () => {
  const [show, setShow] = useState(true);
  const style = useMemo(() => ({ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }), []);
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

  const onCloseModal = useCallback(() => {
    setShow(false);
  }, []);

  const onSubmit = useCallback((data: IFormValues) => {
    console.log(data);
  }, []);

  return (
    <>
      <Base>
        <CloseAlertModal
          show={show}
          onCloseModal={onCloseModal}
          subject={'로그인을 중단하시겠어요?'}
          yes={'네'}
          no={'아니요'}
        >
          <Step>
            <div className={'titles'}>
              <h1>인스타그램</h1>
              <p>로그인</p>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className={'labels'}>
                <label>
                  <span>전화번호, 사용자 이름 또는 이메일</span>
                  <input type={'text'} {...register('email')} placeholder={'전화번호, 사용자 이름 또는 이메일'} />
                </label>
                <label>
                  <span>비밀번호</span>
                  <input type={'text'} {...register('password')} placeholder={'비밀번호'} />
                </label>
              </div>
              <Button disabled={false} type={'submit'}>
                로그인
              </Button>
            </Form>
            <SocialLogins>
              <li>페이스북</li>
              <li>카카오톡</li>
            </SocialLogins>
          </Step>
        </CloseAlertModal>
      </Base>
    </>
  );
};

export default SignIn;
