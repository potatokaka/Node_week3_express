const handleSuccess = require('../service/handleSuccess')
const handleError = require('../service/handleError')
const Post = require('../model/post')

const PostControllers = {
  async getPosts(req, res) {
    const postData = await Post.find()
    handleSuccess(res, postData)
  },
  async createPost(req, res) {
    try {
      const { body } = req
      if ( body.content ) {
        const newPost = await Post.create({
          name: body.name,
          content: body.content,
          type: body.type,
          tags: body.tags
        })
        handleSuccess(res, newPost)
      } else {
        handleError(res)
      }
    } catch (err) {
      handleError(res, err)
    }
  },
  async deletePosts(req, res) {
    try {
      const postData = await Post.deleteMany({})
      handleSuccess(res, postData)
    } catch (err) {
      handleError(res, err)
    }
  },
  async deletePost(req, res) {
    try {
      const { id } = req.params
      const postData = await Post.findByIdAndDelete(id);
      handleSuccess(res, postData)
    } catch (err) {
      handleError(res, err)
    }
  },
  async updatePost(req, res) {
    try {
      const { id } = req.params
      const { body } = req
      const postData = await Post.findByIdAndUpdate(
        id,
        {
          name: body.name,
          content: body.content,
          image: body.image,
          type: body.tags,
          tags: body.type
        }
      )
      handleSuccess(res, postData)
    } catch (err) {
      handleError(res, err)
    }
  }
}

module.exports = PostControllers