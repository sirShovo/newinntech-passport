import express from 'express'
import { addDairy, getDairies, getDairiesWithoutComments } from '../controllers/diaries.controller'

const router = express.Router()

router.get('/', getDairies)
router.get('/without-comments', getDairiesWithoutComments)
router.post('/', addDairy)

export default router
