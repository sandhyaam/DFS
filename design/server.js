const express = require('express')
const app = express()
var image = require('path').join(__dirname, '/images');
app.use(express.static(image));
app.get('/', loadstdHtml);
app.get('/home', homepage);
app.get('/about', aboutpage);
app.get('/admin', adminLoginPage);
app.get('/user', userLogin);

app.get('/adminpage', adminpage);
app.get('/userPage', userpage);
app.get('/userRegistration', userRegistration);
app.get('/forgotpassword', forgotpassword);

app.get('/Admin/addPhotoPrice', addPhotoPrice);
app.get('/Admin/viewPhotoPriceDetails', viewPhotoPriceDetails);
app.get('/Admin/viewUser', viewUser);
app.get('/Admin/viewUserRequest', viewUserRequest);

app.get('/User/uploadPhotos', uploadPhotos);
app.get('/User/viewPhotoPrice', viewPhotoPrice);
app.get('/User/userProfile', userProfile);
app.get('/User/requestStatus', RequestStatus);
app.get('/User/paymentdetailspage', paymentdetailspage);

function loadstdHtml(req, res) {
    res.sendFile('index.html', { root: __dirname });
}
function homepage(req, res) {
    res.sendFile('home.html', { root: __dirname });
}

function aboutpage(req, res) {
    res.sendFile('/about.html', { root: __dirname });
}

function adminLoginPage(req, res) {
    res.sendFile('adminlogin.html', { root: __dirname });
}
function viewPhotoPriceDetails(req, res) {
    res.sendFile('Admin/viewPhotoPrice.html', { root: __dirname });
}
function userLogin(req, res) {
    res.sendFile('userlogin.html', { root: __dirname });
}
function adminpage(req, res) {
    res.sendFile('Admin/admin.html', { root: __dirname });
}
function addPhotoPrice(req, res) {
    res.sendFile('Admin/photoprice.html', { root: __dirname });
}
function viewUser(req, res) {
    res.sendFile('Admin/userDetails.html', { root: __dirname });
}

function viewUserRequest(req, res) {
    res.sendFile('Admin/userRequest.html', { root: __dirname });
}
function userpage(req, res) {
    res.sendFile('User/user.html', { root: __dirname });
}

function userRegistration(req, res) {
    res.sendFile('userRegistration.html', { root: __dirname });
}
function forgotpassword(req, res) {
    res.sendFile('userForgotPasswrd.html', { root: __dirname });
}

function uploadPhotos(req, res) {
    res.sendFile('User/uploadphotos.html', { root: __dirname });
}
function viewPhotoPrice(req, res) {
    res.sendFile('User/photoprices.html', { root: __dirname });
}
function paymentdetailspage(req, res) {
    res.sendFile('User/paymentdetailspage.html', { root: __dirname });
}

function userProfile(req, res) {
    res.sendFile('User/profile.html', { root: __dirname });
}
function RequestStatus(req, res) {
    res.sendFile('User/requestStatus.html', { root: __dirname });
}

app.listen(3000, () => console.log(`Example app listening on port number 3000!`))