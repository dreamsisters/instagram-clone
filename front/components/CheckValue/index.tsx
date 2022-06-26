import React, { useEffect } from 'react';

export const CheckEmail = (email: string, setEmail: React.Dispatch<React.SetStateAction<boolean>>) => {
  useEffect(() => {
    if (email != '') {
      setEmail(true);
      console.log('email check');
    } else {
      setEmail(false);
      console.log('email empty');
    }
  }, [email]);
};

export const CheckName = (name: string, setName: React.Dispatch<React.SetStateAction<boolean>>) => {
  useEffect(() => {
    if (name != '') {
      setName(true);
      console.log('name check');
    } else {
      setName(false);
      console.log('name empty');
    }
  }, [name]);
};

export const CheckNickname = (nickname: string, setNickname: React.Dispatch<React.SetStateAction<boolean>>) => {
  useEffect(() => {
    if (nickname != '') {
      setNickname(true);
      console.log('nickname check');
    } else {
      setNickname(false);
      console.log('nickname empty');
    }
  }, [nickname]);
};

export const CheckPassword = (password: string, setPassword: React.Dispatch<React.SetStateAction<boolean>>) => {
  useEffect(() => {
    if (password != '') {
      setPassword(true);
      console.log('password check');
    } else {
      setPassword(false);
      console.log('password empty');
    }
  }, [password]);
};
