import {Router} from 'express'

import {
    adminlogin,
    addPhotoPrice,
    userDetails,
    userRequestDetails,
    editUserRequest,
    updateUserRequest,
    editPhotoPrice,
    photoSizesDetails,
    updatePhotoPrice,
    delelePhotoPrice
} from './controller'

const router=new Router();

router.get('/',adminlogin)

router.post('/addPhotoPrice',addPhotoPrice)

router.get('/photoSizesDetails',photoSizesDetails)

router.get('/userDetails',userDetails)

router.get('/editUserRequest/:id', editUserRequest)

router.get('/editPhotoPrice/:id', editPhotoPrice)

router.get('/userRequestDetails',userRequestDetails)

router.put('/updatePhotoPrice/:id',updatePhotoPrice)

router.put('/updateUserRequest/:id', updateUserRequest)

router.delete('/delelePhotoPrice/:id', delelePhotoPrice)


export default router