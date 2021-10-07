import CONSTANT from '@constant/index'
export function countdown(nowDate, endDate) {
  const now = nowDate ? new Date(nowDate).getTime() : Date.now();
  const end = new Date(endDate).getTime();

  const diff = end - now;

  if(diff <= 0) {
    console.log('已结束');
    return false;
  }

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const day = hours * 24;

  const diffDay = Math.floor(diff / day);
  const diffHours = Math.floor((diff / hours) % 24);
  const diffMinutes = Math.floor((diff / minutes) % 60);
  const diffSeconds = Math.floor((diff / seconds) % 60);

  const zero = (num) => num < 10 ? `0${num}` : num <= 0 ? 0 : num;

  console.log(
    `${diffDay} 天 ${diffHours} 小时 ${diffMinutes} 分 ${diffSeconds} 秒`
  );
  return {
    day: zero(diffDay),
    hours: zero(diffHours),
    minutes: zero(diffMinutes),
    seconds: zero(diffSeconds),
  };
}

export const isPrevLive = () => {
  const now = Date.now();
  return now < new Date(CONSTANT.LIVE_START_TIME).getTime();
}

export const isLiving = () => {
  const now = Date.now();
  return now > new Date(CONSTANT.LIVE_START_TIME).getTime() &&  now < new Date(CONSTANT.LIVE_END_TIME).getTime();
}

export const isLived = () => {
  const now = Date.now();
  return now > new Date(CONSTANT.LIVE_END_TIME).getTime();
}
// 直播预热（6:30 前）
export const stage1 = () => {
  const now =  Date.now()
  return now <= new Date(CONSTANT.LIVE_PREV_TIME).getTime();
}
// 直播中（6:30 - 8:00）
export const stage2 = () => {
  const now =  Date.now()
  return now > new Date(CONSTANT.LIVE_PREV_TIME).getTime() &&  now < new Date(CONSTANT.LIVE_END_TIME).getTime();
}
// 直播结束（8:00 之后）
export const stage3 = () => {
  const now = Date.now();
  return now > new Date(CONSTANT.LIVE_END_TIME).getTime();
}

export const isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)