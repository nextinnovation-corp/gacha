import Sequelize from 'sequelize';
import sequelize from '../sequelizeInstance';

export default function defineSchema() {
  const User = sequelize.define('user', {
    name: {
      type: Sequelize.STRING,
    }
  });
}
