const express = require('express')
const router = express.Router()
const PostControllers = require('../controllers/posts')

router.get('/', PostControllers.getPosts);

router.post('/', PostControllers.createPost);

router.delete('/', PostControllers.deletePosts);

router.delete('/:id', PostControllers.deletePost);

router.patch('/:id', PostControllers.updatePost);

router.get('*', (req, res) => {
    res.status(404).send({
        message: 'Sorry...無此網站路由'
    });
});
module.exports = router