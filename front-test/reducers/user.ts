export interface IUser {
  email: string;
  name?: string;
  nickname?: string;
  password: string;
  phone?: string;
  gender?: string;
  birth?: number;
}

export interface IUserState {
  isLoggedIn: boolean;
  me: IUser | null;
  signUpData: {};
  loginData: {};
}

export const initialState: IUserState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export interface IAction {
  type: string;
  data: IUser;
  payload: {
    email: string;
  };
}

export const loginAction = (data: IUser) => {
  return {
    type: 'LOG_IN',
    data,
  };
};

export const logoutAction = () => {
  return {
    type: 'LOG_OUT',
  };
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
