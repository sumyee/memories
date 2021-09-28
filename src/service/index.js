import request from '@utils/request';

export function getTime() {
  return request.get('http://api.k780.com/?app=life.time&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json');
}