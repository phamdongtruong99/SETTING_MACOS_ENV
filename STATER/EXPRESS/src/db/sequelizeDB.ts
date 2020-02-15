import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'node', //database
  'root', // user
  'password',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

export default sequelize;
