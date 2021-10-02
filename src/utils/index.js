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


export const isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)