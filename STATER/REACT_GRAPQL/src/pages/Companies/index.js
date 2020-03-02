import React, { useEffect } from 'react';
import CompaniesTable from 'components/Companies/Table';
import { useDispatch } from 'react-redux';
import useRouter from 'hooks/useRouter';
import { getDefaultURL } from 'utils/time';
import actions from 'redux/utils/actions';
import MaterialBreadcrumb from 'components/common/MaterialBreadcrumb';

const Companies = () => {
  const dispatch = useDispatch();
  const { location, history } = useRouter();

  useEffect(() => {
    const defaultURL = getDefaultURL({ haveTable: true });
    if (location.search) {
      dispatch(
        actions.companies.getAllData({
          customResource: 'company/companies',
          query: location.search,
        }),
      );
    } else {
      history.replace(defaultURL);
    }
  }, [dispatch, location.search, history]);
  return (
    <>
      <div className="flex justify-between">
        <MaterialBreadcrumb data={[{ path: '/companies', title: 'Công ty' }]} />
      </div>
      <div className="mb-115 mt-19">
        <CompaniesTable />
      </div>
    </>
  );
};

Companies.propTypes = {};

export default Companies;
