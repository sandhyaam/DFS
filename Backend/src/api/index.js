import {Router} from 'express'

import admin from './Admin'
import user from './User'

const router=new Router();

router.use('/admin',admin)
router.use('/user',user)

export default router;