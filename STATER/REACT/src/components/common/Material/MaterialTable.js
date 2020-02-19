/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Table, Card } from 'antd';
import { useSelector } from 'react-redux';
import useRouter from 'hooks/useRouter';
import styled from 'styled-components';
import CardTitle from 'components/common/CardTitle';
import PropTypes from 'prop-types';
import i18next from 'i18next';

const StyledTable = styled(Table)`
  .ant-table-pagination.ant-pagination .ant-pagination-item-active {
    border-color: #2979ff;
  }
`;

const MaterialTable = ({ title, columns, resource, extra, scroll }) => {
  const data = useSelector(state => state[resource]);

  const router = useRouter();
  const { query, handlePushParams } = router;
  const { isLoading } = useSelector(state => state.loading);

  const handlePaginate = ({ current, pageSize }) => {
    handlePushParams({
      page: current,
      limit: pageSize,
    });
  };

  return (
    <Card
      title=<CardTitle
        title={title}
        subTitle={`Tổng số ${i18next.t(resource)}: ${data?.totalItems}`}
      />
      className="card-padding-0"
      extra={extra}
    >
      <StyledTable
        dataSource={data.allData}
        columns={columns}
        onChange={handlePaginate}
        pagination={{
          current: +query.page,
          total: data?.totalItems,
          pageSize: data.limit,
          showSizeChanger: true,
        }}
        loading={isLoading}
        scroll={scroll}
      />
    </Card>
  );
};

MaterialTable.propTypes = {
  columns: PropTypes.array,
  resource: PropTypes.string,
  title: PropTypes.string,
  extra: PropTypes.any,
  scroll: PropTypes.object,
};

MaterialTable.defaultProps = {};

export default MaterialTable;
