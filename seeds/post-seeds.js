const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
