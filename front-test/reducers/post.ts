import { IUser } from '@reducers/user';

export interface IPostState {
  mainPosts: {
    id: number;
    User: { id: number; nickname: string };
    content: string;
    Images: { src: string }[];
    Comments: { User: { nickname: string }; content: string }[];
  }[];
  imagePath: [];
  postAdded: false;
}

export interface IAction {
  type: string;
  data: IUser;
  payload: {
    email: string;
  };
}
export const initialState: IPostState = {
  mainPosts: [
    {
      id: 1,
      User: { id: 1, nickname: '초기 데이터' },
      content: '첫 번째 게시글 테스트',
      Images: [
        { src: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68' },
        { src: 'https://www.pinterest.co.kr/pin/751327150351321404' },
      ],
      Comments: [{ User: { nickname: 'Hero' }, content: 'good' }],
    },
  ],
  imagePath: [],
  postAdded: false,
};

// 게시글 작성
const ADD_POST = 'ADD_POST';
export const addPost = (data: any) => {
  return {
    type: ADD_POST,
    data,
  };
};

export const dummyPost = {
  id: 2,
  User: {
    id: 2,
    nickname: '테스트',
  },
  content: '이건 테스트',
  Images: [
    { src: 'https://www.pinterest.co.kr/pin/751327150351321404' },
    { src: 'https://www.pinterest.co.kr/pin/751327150351321404' },
  ],
  Comments: [
    { User: { nickname: 'Hero' }, content: 'Hello' },
    { User: { nickname: 'jj' }, content: 'World' },
  ],
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
