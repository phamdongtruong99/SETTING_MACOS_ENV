import React from 'react';
import { Form, Button } from 'antd';
import PropTypes from 'prop-types';
// import SelectCity from 'components/common/SelectCity';
import useRouter from 'hooks/useRouter';
import { requiredParam } from 'utils/tools';
import crudAction from 'redux/utils/crudAction';
import { useDispatch, useSelector } from 'react-redux';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import RestForm from './RestForm';

const RestEdit = ({
  form = requiredParam('form'),
  children,
  resource,
  customSubmit,
}) => {
  const { location, replace } = useRouter();
  const dispatch = useDispatch();
  const data = useSelector(state => state.companies.data);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (customSubmit) {
          customSubmit(values, form);
        } else {
          dispatch(
            crudAction[resource].editData({
              // eslint-disable-next-line no-underscore-dangle
              id: data[PRIMARY_KEY],
              data: values,
            }),
          );
        }
      }
    });
  };
  const handleCancle = () => {
    replace(`${location.pathname}${location.search}`);
  };
  return (
    <RestForm.Provider value={{ form }}>
      <Form onSubmit={handleSubmit}>
        {children}
        <div className="flex justify-end" style={{ marginTop: '20px' }}>
          <Button style={{ marginRight: '10px' }} onClick={handleCancle}>
            Huỷ bỏ
          </Button>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Xác nhận
            </Button>
          </Form.Item>
        </div>
      </Form>
    </RestForm.Provider>
  );
};

RestEdit.propTypes = {
  form: PropTypes.object,
  children: PropTypes.node,
  resource: PropTypes.string,
  customSubmit: PropTypes.func,
};

export default Form.create()(RestEdit);
