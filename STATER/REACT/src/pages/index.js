import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from 'utils/loadable';
import Loading from 'components/common/Loading';
import Layout from 'components/common/Layout';
import PrivateRoute from 'pages/utils/PrivateRoute';
import CreateCompany from 'components/Companies/CreateCompany';
import EditCompany from 'components/Companies/EditCompany';
import ModalRoute from './utils/ModalRoute';

const Login = loadable(() => import('./Login'), { fallback: <Loading /> });

const Company = loadable(() => import('./Companies/[id]'), {
  fallback: <Loading />,
});
const Companies = loadable(() => import('./Companies'), {
  fallback: <Loading />,
});
const Brands = loadable(() => import('./Brands'), { fallback: <Loading /> });
const Brand = loadable(() => import('./Brands/[id]'), {
  fallback: <Loading />,
});

const Transactions = loadable(() => import('./Transactions'), {
  fallback: <Loading />,
});

const NotFoundPage = loadable(() => import('./404Page'));

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/login" component={Login} exact />
        <PrivateRoute path="/brands/:id" component={Brand} exact />
        <PrivateRoute path="/brands" component={Brands} exact />
        <PrivateRoute path="/transactions" component={Transactions} exact />
        <PrivateRoute path="/:id" component={Company} exact />
        <PrivateRoute path="/" component={Companies} exact />
        <Route component={NotFoundPage} />
      </Switch>
      <ModalRoute path="#companies/create" component={CreateCompany} />
      <ModalRoute path="#companies/edit" component={EditCompany} />
      <ModalRoute path="#brands/create" component={EditCompany} />
      <ModalRoute path="#brands/edit" component={EditCompany} />
    </Layout>
  );
};

export default Routes;
