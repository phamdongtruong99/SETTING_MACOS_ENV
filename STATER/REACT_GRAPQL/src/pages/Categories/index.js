import React, { useEffect } from 'react';
import CategoriesTable from 'components/Categories/Table';
import { useDispatch } from 'react-redux';
import useRouter from 'hooks/useRouter';
import { getDefaultURL } from 'utils/time';
import actions from 'redux/utils/actions';
import MaterialBreadcrumb from 'components/common/MaterialBreadcrumb';

const Categories = () => {
  const dispatch = useDispatch();
  const { location, history } = useRouter();

  useEffect(() => {
    const defaultURL = getDefaultURL({ haveTable: true });
    if (location.search) {
      dispatch(
        actions.categories.getAllData({
          customResource: `company/categories`,
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
        <MaterialBreadcrumb
          data={[{ path: '/categories', title: 'Danh mục' }]}
        />
      </div>
      <div className="mb-115 mt-19">
        <CategoriesTable />
      </div>
    </>
  );
};

Categories.propTypes = {};

export default Categories;
