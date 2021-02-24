import { apiGetTopicDetail } from "@/api/topic";
import { Module } from "vuex";
import { IGlobalState } from "..";
import * as Types from "../action-types";

interface ITopicDetailPayload {
  id: string;
  mdrender?: boolean;
  reload?: boolean;
  token?: string;
}

const initialState: ITopicDetailState = {
  topic: {} as ITopicDetail,
};
const topic: Module<ITopicDetailState, IGlobalState> = {
  namespaced: true,
  state: initialState,
  mutations: {
    [Types.SET_TOPIC_DETAIL](state: ITopicDetailState, payload: ITopicDetail) {
      state.topic = payload;
    },
  },
  actions: {
    async [Types.SET_TOPIC_DETAIL]({ commit }, payload: ITopicDetailPayload) {      
      if (!payload.reload) {
        commit(Types.SET_TOPIC_DETAIL, {});
      }
      try {
        const res = await apiGetTopicDetail(payload.id, payload.mdrender, payload.token);
        commit(Types.SET_TOPIC_DETAIL, res);
      } catch (error) {
        //
      }
    },
  },
};
export default topic;
