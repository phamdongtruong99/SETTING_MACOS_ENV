import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from 'utils/loadable';
import Loading from 'components/common/Loading';
import Layout from 'components/common/Layout';
import PrivateRoute from 'routes/PrivateRoute';

const Login = loadable(() => import('page/Login'), { fallback: <Loading /> });
const Dashboard = loadable(() => import('page/Dashboard'), {
  fallback: <Loading />,
});
const User = loadable(() => import('page/Users/[id]'), {
  fallback: <Loading />,
});
const Users = loadable(() => import('page/Users'), { fallback: <Loading /> });
const Brands = loadable(() => import('page/Brands'), { fallback: <Loading /> });
const Orders = loadable(() => import('page/Orders'), { fallback: <Loading /> });
const Brand = loadable(() => import('page/Brands/[id]'), {
  fallback: <Loading />,
});
const Configs = loadable(() => import('page/Config'), {
  fallback: <Loading />,
});
const Config = loadable(() => import('page/Config/[id]'), {
  fallback: <Loading />,
});
const NotFoundPage = loadable(() => import('page/404Page'));

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/login" component={Login} exact />
        <PrivateRoute path="/orders" component={Orders} exact />
        <PrivateRoute path="/config" component={Configs} exact />
        <PrivateRoute path="/config/:id" component={Config} exact />
        <PrivateRoute path="/brands/:id" component={Brand} exact />
        <PrivateRoute path="/brands" component={Brands} exact />
        <PrivateRoute path="/users/:id" component={User} exact />
        <PrivateRoute path="/users" component={Users} exact />
        <PrivateRoute path="/" component={Dashboard} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  );
};

export default Routes;
