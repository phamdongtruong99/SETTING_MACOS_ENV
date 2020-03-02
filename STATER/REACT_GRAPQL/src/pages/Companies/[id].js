import React, { useEffect, useState } from 'react';
import CompanyDetail from 'components/Companies/Detail';
import actions from 'redux/utils/actions';
import useRouter from 'hooks/useRouter';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card } from 'antd';
import BranchesTable from 'components/Branches/Table';
import { getDefaultURL } from 'utils/time';
import MaterialBreadcrumb from 'components/common/MaterialBreadcrumb';
import CompanyTransactions from 'components/Companies/CompanyTransactions';
import LoyaltyProgramDetail from 'components/LoyaltyProgram/Detail';

const Company = () => {
  const dispatch = useDispatch();
  const { query, location, history, resetParams } = useRouter();
  const [tab, setTab] = useState('1');

  useEffect(() => {
    dispatch(
      actions.companies.getDataById({
        customResource: 'company/companies',
        id: query.id,
      }),
    );
  }, [query.id, dispatch]);

  useEffect(() => {
    const defaultURL = getDefaultURL({ haveTable: true });
    if (location.search) {
      switch (tab) {
        case '1':
          dispatch(
            actions.branches.getAllData({
              customResource: `company/companies/${query.id}/branches`,
              query: location.search,
            }),
          );
          break;
        case '2':
          dispatch(
            actions.transactions.getAllData({
              customResource: `transaction/transaction-histories`,
              query: `${location.search}&companyID=${query.id}`,
            }),
          );
          break;
        default:
          break;
      }
    } else {
      history.replace(defaultURL);
    }
  }, [dispatch, history, location.search, query.id, tab]);
  const company = useSelector(state => state.companies.data);

  const contentList = [
    {
      key: '1',
      tab: 'Chi nhánh',
      component: <BranchesTable />,
    },
    {
      key: '2',
      tab: 'Lịch sử đơn hàng',
      component: <CompanyTransactions />,
    },
    {
      key: '3',
      tab: 'Chương trình thành viên',
      component: <LoyaltyProgramDetail />,
    },
  ];

  return (
    <>
      <div className="flex justify-between">
        <MaterialBreadcrumb
          data={[
            { path: '/companies', title: 'Công ty' },
            {
              path: `/companies/${company?.id}`,
              title: `${company?.name || ''}`,
            },
          ]}
        />
      </div>
      <div className="mt-32 my-60-92">
        <Row gutter={30}>
          <Col span={8}>
            <CompanyDetail data={company} />
          </Col>
          <Col span={16}>
            <Card
              tabList={contentList}
              onTabChange={key => {
                resetParams({
                  limit: 10,
                  page: 1,
                });
                setTab(key);
              }}
            >
              {contentList.find(e => e.key === tab).component}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Company;
