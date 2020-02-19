import React from 'react';
import { Form, Button } from 'antd';
import PropTypes from 'prop-types';
// import SelectCity from 'components/common/SelectCity';
import useRouter from 'hooks/useRouter';
import { requiredParam } from 'utils/tools';
import crudAction from 'redux/utils/crudAction';
import { useDispatch } from 'react-redux';
import RestForm from './RestForm';

const RestCreate = ({
  form,
  children,
  resource = requiredParam('resource'),
  customSubmit,
}) => {
  const { location, replace } = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (customSubmit) {
          customSubmit(values, form);
        } else {
          dispatch(crudAction[resource].createData(values));
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

RestCreate.propTypes = {
  form: PropTypes.object,
  children: PropTypes.node,
  resource: PropTypes.string,
  customSubmit: PropTypes.func,
};

export default Form.create()(RestCreate);
