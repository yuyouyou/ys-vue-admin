import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'yushuang',
    password: '123456',
    avatar: 'https://ovhpjpe19.bkt.clouddn.com/tpgj/service/%E5%91%80.jpg/origine/3fb2a946-4e5e-4026-8af0-4d5284f5bc46',
    name: '余双'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
