export interface IUser {
  id: number;
  email: string;
  phone: string;
  name: string;
  nickname: string;
  avartar: string;
  bio: string;
  snsId: string;
  createdAt?: Date; //확인해야 함
  updatedAt?: Date; //필요없을 듯 하지만 필요하면 넣으면 됨
  //중첩
  Posts: [];
  Followers: [];
  Followings: [];
}

export interface IPath {
  match?: any;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}
