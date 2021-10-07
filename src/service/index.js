import request from '@utils/request';

export function postInfo(data) {
  return request.post('//info-memeries.roaringwild.net/information', data);
}