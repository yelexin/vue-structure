import request from '../utils/request'
export function getAllGoods() {
  return request('/goods', {
    method: 'GET'
  })
}

export function updateGoods(body) {
  return request('/goods', {
    method: 'PUT',
    body: body
  })
}

export function deleteGoods(body) {
  return request('/goods', {
    method: 'DELETE',
    body: body
  })
}

export function newGoods(body) {
  return request('/goods', {
    method: 'POST',
    body: body
  })
}
