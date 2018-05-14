import axios from 'axios';

let base = '';

// 登录
export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

// 分页用户列表
export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

// 批量删除用户
export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

// 删除单个用户
export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

// 删除用户
export const remove = params => { return axios.get(`${base}/user/removeUser`, { params: params }); };

// 新增&编辑用户
export const addEditUser = params => { return axios.get(`${base}/user/addEdit`, { params: params }); };