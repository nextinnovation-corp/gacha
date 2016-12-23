import Sequelize from 'sequelize';
import sequelize from '../sequelizeInstance';

export default function defineSchema() {
  const User = sequelize.define('user', {   // eslint-disable-line no-unused-vars
    name: {
      type: Sequelize.STRING,
    },
  });
}
