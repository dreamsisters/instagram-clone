import { SignBase, SignLargeImg, SignSmallImg, Form, Step, PrevButton, WhiteButton, Button } from './styles';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import CloseMessageModal from '@components/CloseMessageModal';
import InputLable from '@components/InputLable';
import { CheckEmail, CheckName, CheckPassword, CheckNickname } from '@components/CheckValue';
import Logo from '@components/Logo';

interface IFormValues {
  email: string;
  name: string;
  nickname: string;
  password: string;
}

const SignUp = () => {
  const [showFirstStep, setShowFirstStep] = useState(true);
  const [showSecondStep, setShowSecondStep] = useState(false);
  const [showLastStep, setShowLastStep] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      email: '',
      name: '',
      nickname: '',
      password: '',
    },
    mode: 'onChange',
  });

  const { email, name, nickname, password } = watch();

  const [isEmail, setEmail] = useState(false);
  const [isName, setName] = useState(false);
  const [isNickname, setNickname] = useState(false);
  const [isPassword, setPassword] = useState(false);

  CheckEmail(email, setEmail);
  CheckName(name, setName);
  CheckNickname(nickname, setNickname);
  CheckPassword(password, setPassword);

  //Move Step
  const moveToSecond = useCallback(() => {
    setShowFirstStep(false);
    setShowSecondStep(true);
  }, []);

  const moveToLast = useCallback(() => {
    setShowFirstStep(false);
    setShowSecondStep(false);
    setShowLastStep(true);
  }, []);

  const moveBackToFirst = useCallback(() => {
    setShowFirstStep(true);
    setShowSecondStep(false);
    setShowLastStep(false);
  }, []);

  const onSubmit = useCallback((data: IFormValues) => {
    console.log(data);
    moveToSecond();
  }, []);

  const onSubmitBirth = useCallback((data: IFormValues) => {
    console.log(data);
    moveToLast();
  }, []);

  return (
    <SignBase>
      <SignLargeImg>
        <img src="../../src-accets/SignLImg.png" />
      </SignLargeImg>
      <Step>
        {/* STEP 1 - 기본정보 */}
        <CloseMessageModal show={showFirstStep}>
          <Step>
            <div className={'titles'}>
              <Logo />
              <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className={'labels'}>
                <label>
                  <input type={'email'} {...register('email', { required: true })} />
                  <InputLable isValue={isEmail} text="이메일 주소" />
                </label>
                <label>
                  <input type={'text'} {...register('name', { required: true })} />
                  <InputLable isValue={isName} text="성명" />
                </label>
                <label>
                  <input type={'text'} {...register('nickname', { required: true })} />
                  <InputLable isValue={isNickname} text="사용자 이름" />
                </label>
                <label>
                  <input type={'password'} {...register('password', { required: true })} />
                  <InputLable isValue={isPassword} text="비밀번호" />
                </label>
              </div>
              <Button disabled={false} type={'submit'}>
                다음
              </Button>
            </Form>
            <a href="/sign_in" className="toSignIn">
              <WhiteButton>로그인 페이지로 이동</WhiteButton>
            </a>
          </Step>
        </CloseMessageModal>

        {/* STEP 2 - 생일 */}
        <CloseMessageModal show={showSecondStep}>
          <PrevButton onClick={moveBackToFirst}>이전으로</PrevButton>
          <Step>
            <div className={'titles'}>
              <h3>생일 추가</h3>
              <p>공개 프로필에 포함되지 않습니다.</p>
            </div>
            <Form onSubmit={handleSubmit(onSubmitBirth)}>
              <div className={'labels'}>
                <input type={'date'} placeholder={'일'} className="dateInput" />
              </div>
              <Button disabled={false} type={'submit'}>
                가입 완료
              </Button>
            </Form>
          </Step>
        </CloseMessageModal>

        {/* STEP 3 - 로그인 완료 */}
        <CloseMessageModal show={showLastStep}>
          <Step>
            <div className={'titles'}>
              <p>회원가입이 완료되었습니다.</p>
            </div>
            <a href="/sign_in" className="toSignIn">
              <WhiteButton>로그인</WhiteButton>
            </a>
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
