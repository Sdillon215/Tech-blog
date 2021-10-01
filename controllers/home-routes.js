const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
          'id',
          'title',
          'post_text',
          'user_id',
          'created_at'
        ],
        include: [
          {
            model: Comment,
            attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
            include: {
              model: User,
              attributes: ['username']
            }
          },
          {
            model: User,
            attributes: ['username']
          }
        ]
      })
        .then(dbPostData => {
            console.log(dbPostData[0]);
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('homepage', { posts });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
  });

  router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }
  
    res.render('login');
  });

module.exports = router;