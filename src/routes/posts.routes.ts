import express from 'express'
import { addPost, deletePost, getPost, getPosts, updatePost } from '../controllers/posts.controller'
const router = express.Router()

router.get('/', getPosts)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.post('', addPost)

export default router
