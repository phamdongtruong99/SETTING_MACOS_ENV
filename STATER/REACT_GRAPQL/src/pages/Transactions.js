import React, { useEffect } from 'react';
import i18next from 'i18next';
import { useDispatch } from 'react-redux';
import useRouter from 'hooks/useRouter';
import { getDefaultURL } from 'utils/time';
import { actions as transactions } from 'redux/transactions/slice';
import TransactionsTable from 'components/Transactions/Table';
import MaterialBreadcrumb from 'components/common/MaterialBreadcrumb';

const Transactions = () => {
  const dispatch = useDispatch();
  const { location, history } = useRouter();

  useEffect(() => {
    const defaultURL = getDefaultURL({ haveTable: true });
    if (location.search) {
      dispatch(
        transactions.getAllData({
          query: location.search,
          customResource: 'transaction/transaction-histories',
        }),
      );
    } else {
      history.replace(defaultURL);
    }
  }, [dispatch, location.search, history]);

  return (
    <>
      <MaterialBreadcrumb
        data={[{ path: '#', title: i18next.t('transactionHistory') }]}
      />
      <div className="mb-115 mt-19">
        <TransactionsTable />
      </div>
    </>
  );
};

Transactions.propTypes = {};

export default Transactions;
