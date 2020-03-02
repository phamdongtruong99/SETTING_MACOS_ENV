import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from 'components/common/Layout';
import PrivateRoute from 'pages/utils/PrivateRoute';
import CreateCompany from 'components/Companies/Create';
import EditCompany from 'components/Companies/Edit';
import EditBranch from 'components/Branches/Edit';
import CreateBranch from 'components/Branches/Create';
import CreateCategories from 'components/Categories/Create';
import CreateLoyalty from 'components/LoyaltyProgram/Create';
import UpdateLoyalty from 'components/LoyaltyProgram/Update';
import EditCategories from 'components/Categories/Edit';
import UploadModal from 'components/common/UploadModal';
import loadable from './utils/loadable';
import ModalRoute from './utils/ModalRoute';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/login" component={loadable(import('./Login'))} exact />
        <PrivateRoute
          path="/branches/:id"
          component={loadable(import('./Branches/[id]'))}
          exact
        />
        <PrivateRoute
          path="/transactions"
          component={loadable(import('./Transactions'))}
          exact
        />
        <PrivateRoute
          path="/categories"
          component={loadable(import('./Categories'))}
          exact
        />
        <PrivateRoute
          path="/companies/:id"
          component={loadable(import('./Companies/[id]'))}
          exact
        />
        <PrivateRoute
          path="/companies"
          component={loadable(import('./Companies'))}
          exact
        />
        <PrivateRoute
          path="/"
          component={() => <Redirect to="/companies" />}
          exact
        />
        <Route
          component={loadable(import('./404Page'), {
            fallback: null,
          })}
        />
      </Switch>
      <ModalRoute
        path="#companies/create"
        component={CreateCompany}
        title="Tạo công ty"
      />
      <ModalRoute
        path="#categories/create"
        component={CreateCategories}
        title="Tạo danh mục"
      />
      <ModalRoute
        path="#loyalty/create"
        component={CreateLoyalty}
        title="Tạo chương trình nâng hạng thành viên"
        width={1000}
      />
      <ModalRoute
        path="#loyalty/edit"
        component={CreateLoyalty}
        title="Chỉnh sửa chương trình nâng hạng thành viên"
        width={1000}
      />
      <ModalRoute
        path="#loyalty/update"
        component={UpdateLoyalty}
        title="Cập nhật"
      />
      <ModalRoute
        path="#categories/edit"
        component={EditCategories}
        title="Chỉnh sửa danh mục"
      />
      <ModalRoute
        path="#companies/edit"
        component={EditCompany}
        title="Chỉnh sửa công ty"
      />
      <ModalRoute
        path="#branches/edit"
        component={EditBranch}
        title="Chỉnh sửa chi nhánh"
        width={650}
      />
      <ModalRoute
        path="#branches/create"
        component={CreateBranch}
        title="Tạo chi nhánh"
        width={650}
      />
      <ModalRoute
        path="#upload"
        component={UploadModal}
        title="Cập nhật hình ảnh"
      />
    </Layout>
  );
};

export default Routes;
