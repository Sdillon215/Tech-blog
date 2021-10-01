const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_text: '1st post text doooooooooooood',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: '2nd post text bruh',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: '3rd post text bruhhhhhhhhhhhh',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_text: '4th post text bruhhhhhhhhhhhh',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_text: '5th post text bruhhhhhhhhhhhh',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_text: '6th post text bruhhhhhhhhhhhh',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: '7th post text bruhhhhhhhhhhhh',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: '8th post text bruhhhhhhhhhhhh',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_text: '9th post text bruhhhhhhhhhhhh',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_text: '10th post text bruhhhhhhhhhhhh',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
