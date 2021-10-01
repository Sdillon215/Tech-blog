const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  
  await seedUsers();
  console.log('--------------');
  console.log('Users seeded');
  
  await seedPosts();
  console.log('--------------');
  console.log('Posts seeded');

  await seedComments();
  console.log('--------------');
  console.log('comments seeded');

  process.exit(0);
};

seedAll();
