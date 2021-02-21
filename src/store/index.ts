import { createStore } from 'vuex'
import topics from './modules/topics'
import topic from './modules/topic'
import user from './modules/user'

export interface IGlobalState {
  topics: ITopicsState,
  topic: ITopicDetailState,
  user: IUserState
}

export default createStore<IGlobalState>({
  modules: {
    topics,
    topic,
    user
  }
})