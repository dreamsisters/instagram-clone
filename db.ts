export interface IUser {
  id: number;
  nickname: string;
  email?: string;
  phone?: string;
  gender?: string;
  birth?: string;
  bio?: string;
}

export interface IPost {
  id: string;
  content: string;
  images: IImage[];
  hashtags: IHashtag[];
}

export interface IImage {
  id: string;
  src: string;
}

export interface IHashtag {
  id: string;
  content: string;
}
export interface IDM {
  // DM 채팅
  id: number;
  SenderId: number; // 보낸 사람 아이디
  Sender: IUser;
  ReceiverId: number; // 받는 사람 아이디
  Receiver: IUser;
  content: string;
  createdAt: Date;
}
