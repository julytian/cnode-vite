import { apiGetTopics } from '@/api/topics';
import { Module } from 'vuex';
import { IGlobalState } from '..';
import * as Types from '../action-types';

const initialState: ITopicsState = {
  tab: 'all',
  hasMore: true,
  loading: false,
  limit: 20,
  page: 1,
  list: [],
};

const topics: Module<ITopicsState, IGlobalState> = {
  namespaced: true,
  state: initialState,
  mutations: {
    [Types.SET_TOPICS_LOADING](state: ITopicsState, payload: boolean) {
      state.loading = payload;
    },
    [Types.SET_TOPICS_TAB](state: ITopicsState, payload: TTopicTab) {
      state.tab = payload;
    },
    [Types.SET_TOPICS_LIST](state: ITopicsState, payload: ITopic[]) {
      state.list = [...state.list, ...payload];
      state.page += 1;
      state.hasMore = !!payload;
    },
    [Types.SET_TOPICS_INIT](state: ITopicsState) {
      state.loading = false;
      state.page = 1;
      state.hasMore = true;
      state.list = [];
    },
  },
  actions: {
    async [Types.SET_TOPICS_LIST]({ commit, state }) {
      if (state.loading || !state.hasMore) {
        return;
      }
      commit(Types.SET_TOPICS_LOADING, true);
      try {
        const res = await apiGetTopics<ITopic[]>(
          state.page,
          state.tab,
          state.limit
        );
        commit(Types.SET_TOPICS_LIST, res);
      } catch (error) {
        //
      }
      commit(Types.SET_TOPICS_LOADING, false);
    },
    async [Types.SET_TOPICS_INIT]({ commit, state }) {
      commit(Types.SET_TOPICS_INIT);
      commit(Types.SET_TOPICS_LOADING, true);
      try {
        const res = await apiGetTopics<ITopic[]>(
          state.page,
          state.tab,
          state.limit
        );
        commit(Types.SET_TOPICS_LIST, res);
      } catch (error) {
        //
      }
      commit(Types.SET_TOPICS_LOADING, false);
    },
  },
};

export default topics;
