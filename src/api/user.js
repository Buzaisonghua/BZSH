import request from '@/util/request'

export function login (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo (token) {
  return request({
    url: '/user/info',
    mothod: 'get',
    params: token
  })
}

export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
