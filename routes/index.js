import { Router } from 'express'
/* Routes from other files. */
import users from './users'

var router = Router()

router.use('/users', users)
/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ title: 'Express' })
})

export default router
