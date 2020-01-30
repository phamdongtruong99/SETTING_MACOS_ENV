import { createAction } from '@reduxjs/toolkit';

const crudAction = name => {
  const getAllData = createAction(`${name}/getAllData`);
  const getDataById = createAction(`${name}/getDataById`);
  const deleteData = createAction(`${name}/deleteData`);
  const createData = createAction(`${name}/createData`);
  const editData = createAction(`${name}/editData`);
  return {
    getUserById,
    getUsers,
    deleteData,
    createData,
    editData,
  };
};

export default crudAction;
