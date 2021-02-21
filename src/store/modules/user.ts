import { Module } from 'vuex';
import { IGlobalState } from '..';
import * as Types from '../action-types';

const initialState: IUserState = {
  userInfo: {} as IUser,
};

const user: Module<IUserState, IGlobalState> = {
  namespaced: true,
  state: initialState,
  mutations: {
    [Types.SET_USER_INFO](state: IUserState, userInfo: IUser) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    [Types.SET_USER_INFO]({ commit }, payload: IUser) {
      commit(Types.SET_USER_INFO, payload);
    },
  },
};
export default user;
