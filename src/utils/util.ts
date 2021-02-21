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
    return dayjs(time).fromNow();
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
      default:
        str = '暂无';
        className = 'default';
        break;
    }
  }
  return isClass ? className : str;
};