import { createStore } from 'vuex'
import topics from './modules/topics'

export interface IGlobalState {
  topics: ITopicsState,
}

export default createStore<IGlobalState>({
  modules: {
    topics,
  }
})