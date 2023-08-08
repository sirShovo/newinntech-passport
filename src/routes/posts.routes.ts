import express from 'express'
import { addPost, deletePost, getPost, getPosts, updatePost } from '../controllers/posts.controller'
import { checkAuth } from './profile.route'
const router = express.Router()

router.get('/', checkAuth, getPosts)
router.get('/:id', checkAuth, getPost)
router.put('/:id', checkAuth, updatePost)
router.delete('/:id', checkAuth, deletePost)
router.post('', checkAuth, addPost)

export default router
