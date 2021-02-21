import { createStore } from 'vuex'
import topics from './modules/topics'
import topic from './modules/topic'

export interface IGlobalState {
  topics: ITopicsState,
  topic: ITopicDetailState
}

export default createStore<IGlobalState>({
  modules: {
    topics,
    topic,
  }
})