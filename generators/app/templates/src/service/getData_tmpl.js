/**
 * Created by chenjinxin on 2017/3/25.
 */
import fetch from '../config/fetch';

// 测试地址
let testGet = () => fetch('GET', '/v1/cities', {
  type: 'guess'
});

export {
  testGet
}
