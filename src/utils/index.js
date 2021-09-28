export function countdown(nowDate, endDate) {
  const now = Date.now();
  const end = new Date(endDate).getTime();

  const diff = end - now;
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const day = hours * 24;

  const diffDay = Math.floor(diff / day);
  const diffHours = Math.floor((diff / hours) % 24);
  const diffMinutes = Math.floor((diff / minutes) % 60);
  const diffSeconds = Math.floor((diff / seconds) % 60);

  console.log(
    `${diffDay} 天 ${diffHours} 小时 ${diffMinutes} 分 ${diffSeconds} 秒`
  );
  return {
    day: diffDay,
    hours: diffHours,
    minutes: diffMinutes,
    seconds: diffSeconds,
  };
}
