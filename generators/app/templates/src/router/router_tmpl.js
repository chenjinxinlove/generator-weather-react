/**
 * Created by chenjinxin on 2017/3/25.
 */
import React from 'react';
import { Route} from 'react-router';
import App  from '../pages/app';

const Home = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../pages/home/home').default)
  },'Home')
};

const routes = (
  <Route>
    <Route path="/" component={App}></Route>
    <Route path="/home" getComponent={ Home }></Route>
  </Route>
);
export default routes;
