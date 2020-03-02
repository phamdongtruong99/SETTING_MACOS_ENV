import React, { useEffect } from 'react';
import actions from 'redux/utils/actions';
import useRouter from 'hooks/useRouter';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import MaterialBreadcrumb from 'components/common/MaterialBreadcrumb';
import BranchDetail from 'components/Branches/Detail';
import BranchTransactions from 'components/Branches/BranchTransactions';
import { getDefaultURL } from 'utils/time';
import TabList from 'components/common/TabList';
import BranchGuides from 'components/Branches/BranchGuides';

const Branch = () => {
  const dispatch = useDispatch();
  const { query, location, history } = useRouter();
  const branch = useSelector(state => state.branches.data);
  useEffect(() => {
    dispatch(
      actions.branches.getDataById({
        customResource: `company/branches`,
        id: query.id,
      }),
    );
  }, [query.id, dispatch]);

  useEffect(() => {
    const defaultURL = getDefaultURL({ haveTable: true });

    if (location.search) {
      dispatch(
        actions.transactions.getAllData({
          customResource: `transaction/transaction-histories`,
          query: `${location.search}&companyID=${branch.companyID}&branchID=${query.id}`,
        }),
      );
    } else {
      history.replace(defaultURL);
    }
  }, [
    branch.companyID,
    branch.id,
    query.id,
    dispatch,
    history,
    location.search,
  ]);
  return (
    <>
      <MaterialBreadcrumb
        data={[
          { path: '/companies', title: 'Công ty' },
          { path: `/companies/${branch?.companyID}`, title: 'Chi nhánh' },
          {
            path: `/branches/${branch?.id}`,
            title: `${branch?.name || ''}`,
          },
        ]}
      />
      <div className="mt-32 my-60-92">
        <Row gutter={30}>
          <Col span={8}>
            <BranchDetail data={branch} />
          </Col>
          <Col span={16}>
            <TabList
              contentList={[
                {
                  key: '1',
                  tab: 'Chi nhánh',
                  component: <BranchTransactions />,
                },
                {
                  key: '2',
                  tab: 'Hướng dẫn',
                  component: <BranchGuides />,
                },
              ]}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Branch;
