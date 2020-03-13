import {Router} from 'express'

import{
    userLogin,
    userRegistration,
    userProfile,
    forgotpassword,
    photoSizesDetails,
    uploadPhotos,
    addpayment,
    updateProfile,
    getPhotoData,
    getUploadData
} from './controller'

const router=new Router();

router.post('/userRegistration',userRegistration)

router.get('/userLogin',userLogin)

router.get('/userProfile',userProfile)

router.get('/forgotpassword', forgotpassword);

router.put('/updateProfile/:id', updateProfile)

router.get('/photoSizesDetails',photoSizesDetails)

router.post('/uploadPhotos',uploadPhotos)

router.get('/getPhotoData',getPhotoData)

router.post('/addpayment',addpayment)

router.get('/getUploadData',getUploadData)


export default router