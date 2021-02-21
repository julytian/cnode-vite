declare type TTopicTab = 'all' | 'share' | 'ask' | 'good' | 'job';

declare interface IAuthor {
  loginname: string;
  avatar_url: string;
}

declare interface ITopic {
  id: string;
  author_id: string;
  tab: TTopicTab;
  content?: string;
  title?: string;
  last_reply_at: string;
  good: boolean;
  top: boolean;
  reply_count: number;
  visit_count: number;
  create_at: string;
  author: IAuthor;
}

declare interface ITopicsState {
  tab: TTopicTab;
  finished: boolean;
  limit: number;
  page: number;
  list: ITopic[];
}

declare interface IApiGetTopics {
  page: number;
  tab: string;
  limit: number;
  mdrender: boolean;
}

// 主题详情
declare interface ITopicDetail {
  id: string;
  author_id: string;
  tab: TTopicTab;
  content: string;
  title: string;
  last_reply_at: string;
  good: boolean;
  top: boolean;
  reply_count: number;
  visit_count: number;
  create_at: string;
  author: IAuthor;
  replies: ITopicReply[];
  is_collect: boolean;
}
declare interface ITopicReply {
  author: IAuthor;
  content: string;
  create_at: string;
  id: string;
  is_uped: boolean;
  reply_id: unknown;
  ups: string[];
}
declare interface ITopicDetailState {
  topic: ITopicDetail;
}
