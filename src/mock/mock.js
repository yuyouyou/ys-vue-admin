import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginUsers, Users } from './data/user';
let _Users = Users;

export default {
  /**
   * mock adapter
   */
  funAdapter() {
    // 定义一个mock adapter实例
    let mock = new MockAdapter(axios);

    // mock success request
    // arguments for reply are (status, data, headers) 
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });

    // 登录
    mock.onPost('/login').reply(config => {

      let {username, password} = JSON.parse(config.data);

      return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
        let hasUser = LoginUsers.some(u => {
            if (u.username === username && u.password === password) {
              user = JSON.parse(JSON.stringify(u));
              user.password = undefined;
              return true;
            }
          });

          if (hasUser) {
            resolve([200, { code: 200, msg: '请求成功', user }]);
          } else {
            resolve([200, { code: 500, msg: '账号或密码错误' }]);
          }
        },1000)
      });
    });

    // 获取用户列表（分页）
    mock.onGet('/user/listpage').reply(config => {
      let {page, name} = config.params;
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      let total = mockUsers.length;
      mockUsers = mockUsers.filter((u, index) => index < 15 * page && index >= 15 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            users: mockUsers
          }]);
        }, 1000);
      });
    });

    // 批量删除用户
    mock.onGet('/user/batchremove').reply(config => {
      let { ids } = config.params;
      ids = ids.split(',');
      _Users = _Users.filter(u => !ids.includes(u.id));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    // 删除单个用户
    mock.onGet('/user/remove').reply(config => {
      let { id } = config.params;
      _Users = _Users.filter(u => u.id !== id);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    // 删除用户(结合上面两个接口)
    mock.onGet('/user/removeUser').reply(config => {

      let { id } = config.params;
      id = id.split(',');// 转化为数组

      console.log('config.params：'+JSON.stringify(config.params));
      console.log('id：'+id);

      /* if(id instanceof Array) {
        _Users = _Users.filter(u => !id.includes(u.id));
      }else {
        _Users = _Users.filter(u => u.id !== id);
      } */
      _Users = _Users.filter(u => !id.includes(u.id));
     
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //新增&编辑用户
    mock.onGet('/user/addEdit').reply(config => {
      let { id, name, addr, age, birth, sex,  isEdit} = config.params;

      if(isEdit){

        _Users.some(u => {
          if (u.id === id) {
            u.name = name;
            u.addr = addr;
            u.age = age;
            u.birth = birth;
            u.sex = sex;
            return true;
          }
        });

      }else {

        _Users.push({
          name: name,
          addr: addr,
          age: age,
          birth: birth,
          sex: sex
        });
        
      }
      
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '操作成功'
          }]);
        }, 500);
      });
    });

  }
};