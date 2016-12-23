import sequelize from '../server/data/sequelizeInstance';
import defineSchema from '../server/data/models/defineSchema'

export default async function syncDatabase() {
  console.log('Start to clean the database.');
  try {
    defineSchema();
    await sequelize.sync({force: true});
    console.log('Complete to clean the database.');
  } catch (e) {
    console.trace(e);
  }
}
