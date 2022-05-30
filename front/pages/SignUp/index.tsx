import { SignBase, SignLargeImg, SignSmallImg, Form, Step, PrevButton, WhiteButton, Button } from './styles';
import Modal from '@components/Modal';
import React, { useCallback, useMemo, useState } from 'react';
import CloseMessageModal from '@components/CloseMessageModal';
import Logo from '@components/Logo';
import { useForm } from 'react-hook-form';

interface IFormValues {
  email?: string;
  name: string;
  nickname: string;
  password: string;
}

const SignUp = () => {
  const [showFirstStep, setShowFirstStep] = useState(true);
  const [showSecondStep, setShowSecondStep] = useState(false);
  const [showLastStep, setShowLastStep] = useState(false);

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
      name: '',
      nickname: '',
      password: '',
    },
    mode: 'onChange',
  });

  const { email, name, nickname, password } = watch();

  const onCloseModal = useCallback(() => {
    setShowFirstStep(false);
    setShowSecondStep(false);
    setShowLastStep(false);
  }, []);

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
        <CloseMessageModal
          show={showFirstStep}
          onCloseModal={onCloseModal}
          subject={'회원가입을 중단하시겠어요?'}
          yes={'네'}
          no={'아니요'}
        >
          <Step>
            <div className={'titles'}>
              <Logo />
              <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className={'labels'}>
                <input type={'text'} placeholder={'휴대폰 번호 또는 이메일 주소'} />
                <input type={'text'} placeholder={'성명'} />
                <input type={'text'} placeholder={'사용자 이름'} />
                <input type={'text'} placeholder={'비밀번호'} />
              </div>
              <Button disabled={false} type={'submit'}>
                다음
              </Button>
            </Form>
          </Step>
        </CloseMessageModal>
        {/* STEP 2 - 생일 */}
        <CloseMessageModal
          show={showSecondStep}
          onCloseModal={onCloseModal}
          subject={'회원가입을 중단하시겠어요?'}
          yes={'네'}
          no={'아니요'}
        >
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
        <CloseMessageModal
          show={showLastStep}
          onCloseModal={onCloseModal}
          subject={'바로 입장(?) 진행하시겠어요?'}
          yes={'네'}
          no={'아니요'}
        >
          <Step>
            <div className={'titles'}>
              <p>회원가입이 완료되었습니다.</p>
            </div>
            <a href="/sign_in">
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
