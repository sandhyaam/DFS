import admin from './adminloginModel'
import photoSizes from '../Common/addPhotoPriceModel'
import user from '../Common/userRegistration'
import uploadData from '../Common/uploadPhotosModel'
import { sendEmail } from '../Common/email';

export const adminlogin = (req, res) => {
  admin.findOne({ "userName": req.query.userName, "password": req.query.password }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const addPhotoPrice = (req, res) => {
  photoSizes.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(result);
    }
  })
}

export const userDetails = (req, res) => {
  user.find({}, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const userRequestDetails = (req, res) => {
  uploadData.find().populate('user').exec((err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      const ress = result.map(data => {
        return { id: data._id, user: data.user.lastName, photoSize: data.photoSize, price: data.price, noOfCopies: data.noOfCopies, totalAmount: data.totalAmount, photo: data.photo, status: data.status }
      })
      res.send(ress);
    }
  })
}

export const editPhotoPrice = (req, res) => {
  photoSizes.findById({ "_id": req.params.id }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);

  })
}

export const editUserRequest = (req, res) => {
  uploadData.find({ "_id": req.params.id }).populate('user').exec((err, user) => {
    if (err) {
      res.send(err);
    }
    else {
      const ress = user.map(data => {
        return { id: data._id, user: data.user.lastName, photoSize: data.photoSize, price: data.price, noOfCopies: data.noOfCopies, totalAmount: data.totalAmount, photo: data.photo, status: data.status }
      })
      res.send(ress);
    }
  })
}

export const updatePhotoPrice = (req, res) => {
  photoSizes.findByIdAndUpdate({ "_id": req.params.id }, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}


export const photoSizesDetails = (req, res) => {
  photoSizes.find((err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const updateUserRequest = (req, res) => {
  uploadData.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      user.findById(result.user, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          const subject = 'Order Details';
          const body = `Your Order Request Details.....<br><br>PhotoSize: ${result.photoSize}<br>Amount: ${result.totalAmount}<br>Status: ${result.status}<br>Thank You.`;
          sendEmail(results.email, subject, body);
          res.send(result);
        }
      })
    }
  })
}


export const delelePhotoPrice = (req, res) => {
  photoSizes.findByIdAndRemove({ "_id": req.params.id }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}