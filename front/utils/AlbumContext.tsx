import { createContext, FC, ReactNode, useState } from 'react';

export const UserTag = createContext({
  fileDate: 0,
  tagUsers: '',
});

const UserTagProvider: FC = (children: any) => {
  let fileDate = 0;
  let tagUsers = '';

  return <UserTag.Provider value={{ fileDate, tagUsers }}>{children}</UserTag.Provider>;
};

export default UserTagProvider;
