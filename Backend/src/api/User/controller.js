import user from '../Common/userRegistration';
import payment from '../Common/paymentsModel';
import uploadPhoto from '../Common/uploadPhotosModel';
import photoSizes from '../Common/addPhotoPriceModel';
import { sendEmail } from '../Common/email';


export const userLogin = (req, res) => {
  user.findOne({ "email": req.query.email, "password": req.query.password }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const userRegistration = (req, res) => {
  user.create(req.body, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const photoSizesDetails = (req, res) => {
  photoSizes.find({}, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const uploadPhotos = (req, res) => {
  uploadPhoto.create(req.body, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const userProfile = (req, res) => {
  user.find({ "email": req.query.email }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(result.map(record => {
        return record;
      }));
    }
  })
}

export const updateProfile = (req, res) => {
  user.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const forgotpassword = (req, res) => {
  user.findOne({ "email": req.query.email }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      const subject = 'Credentials Recived';
      const body = `userName: ${result.lastName}<br>password: ${result.password}<br>Please Login  Using these Credentials<br>Thank You.`;
      sendEmail(req.query.email, subject, body);
      res.send(result);
    }
  })
}
export const getPhotoData = (req, res) => {
  photoSizes.find({ "photoSize": req.query.photoSize }, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const getUploadData = (req, res) => {
  uploadPhoto.find({ "user": req.query.user }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(result);
    }
  })
}

export const addpayment = (req, res) => {
  payment.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      req.body.status = "Payment Successfull";
      uploadPhoto.findByIdAndUpdate(req.body.upload, req.body, { new: true }, (err, result) => {
        if (err) {
          res.send(err);
        }
        else {
          //sending mail to Admin
          const subject = 'Payment Details';
          const body = `Ur Order Payment SuccessFull <br><br>PhotoSize: ${result.photoSize}<br>Amount: ${result.totalAmount}<br>Status:${result.status}<br>Thank You.`;
          sendEmail("sandhyacoign9@gmail.com", subject, body);

          //sending mail to User
          const subject1 = 'Payment Details';
          const body1 = `Ur Order Payment SuccessFull <br><br>PhotoSize: ${result.photoSize}<br>Amount: ${result.totalAmount}<br>Status:${result.status}<br>Thank You.`;
          sendEmail(req.body.userEmail, subject1, body1);
          res.send(result);
        }
      })

    }
  })

}
