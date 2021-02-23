import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime); // 相对时间
dayjs.locale('zh-cn'); // 使用本地化语言

/**
 *
 * @param time 时间字符串
 * @param friendly 显示xxx时间前
 */
export function getLastTimeStr(time: string, friendly: boolean) {
  if (friendly) {
    return dayjs(time).fromNow().replace(' ', '');
  }
  return dayjs(new Date(time)).format('YYYY-MM-DD HH:mm');
}

/**
 * 获取不同tab的信息
 * @param  {[String]}  tab     [tab分类]
 * @param  {[Boolean]}  good    [是否是精华]
 * @param  {[Boolean]}  top     [是否置顶]
 * @param  {Boolean} isClass [是否是样式]
 * @return {[type]}          [返回对应字符串]
 */
export const getTabInfo = (
  tab: TTopicTab,
  good: boolean,
  top: boolean,
  isClass: boolean
) => {
  let str = '';
  let className = '';
  if (top) {
    str = '置顶';
    className = 'top';
  } else if (good) {
    str = '精华';
    className = 'good';
  } else {
    switch (tab) {
      case 'share':
        str = '分享';
        className = 'share';
        break;
      case 'ask':
        str = '问答';
        className = 'ask';
        break;
      case 'job':
        str = '招聘';
        className = 'job';
        break;
      case 'dev':
        str = '测试';
        className = 'test';
        break;
      default:
        str = '暂无';
        className = 'default';
        break;
    }
  }
  return isClass ? className : str;
};

export const backTop = (num = 0) => {
  document.body.scrollTop = num;
  document.documentElement.scrollTop = num;
};

/**
 * 从文本中提取出@username 标记的用户名数组
 * @param {String} text 文本内容
 * @return {Array} 用户名数组
 */
const fetchUsers = (text: string) => {
  if (!text) {
    return [];
  }

  const ignoreRegexs = [
    /```.+?```/g, // 去除单行的 ```
    /^```[\s\S]+?^```/gm, // ``` 里面的是 pre 标签内容
    /`[\s\S]+?`/g, // 同一行中，`some code` 中内容也不该被解析
    /^.*/gm, // 4个空格也是 pre 标签，在这里 . 不会匹配换行
    /\b\S*?@[^\s]*?\..+?\b/g, // somebody@gmail.com 会被去除
    /\[@.+?\\]\(\/.+?\)/g, // 已经被 link 的 username
  ];

  ignoreRegexs.forEach((ignoreRegex) => {
    text = text.replace(ignoreRegex, '');
  });

  const results = text.match(/@[a-z0-9\-_]+\b/gim);
  const names = new Set();
  if (results) {
    for (var i = 0, l = results.length; i < l; i++) {
      var s = results[i];
      // remove leading char @
      s = s.slice(1);
      names.add(s);
    }
  }
  return Array.from(names);
};

/**
 * 根据文本内容，替换为数据库中的数据
 * @param {String} text 文本内容
 * @param {Function} callback 回调函数
 */
export const linkUsers = (text: string) => {
  const users = fetchUsers(text);
  for (var i = 0, l = users.length; i < l; i++) {
    const name = users[i];
    text = text.replace(
      new RegExp('@' + name + '\\b(?!\\])', 'g'),
      '[@' + name + '](/user/' + name + ')'
    );
  }
  return text;
};
