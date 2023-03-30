const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// ---------------------------------------- Best Start Grant routes ---------------------------//
router.post('/forms/sss-forms/best-start/BS-location', function (req, res) {
  var whereYouLive = req.session.data['BSG-location-name'];

  if (whereYouLive === 'Scotland') {
     return res.redirect('/forms/sss-forms/best-start/BS-start');
  } else if (whereYouLive === 'eWNI') {
      return res.redirect('/forms/sss-forms/best-start/BS-england');
  } else {
      return res.redirect('/forms/sss-forms/best-start/BS-outside');
  }

})

router.post('/forms/sss-forms/best-start/BS-start', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-child-check')
})

router.post('/forms/sss-forms/best-start/BS-child-check', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-child-check-2')
})

router.post('/forms/sss-forms/best-start/BS-child-check-2', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-pregnant')
})

router.post('/forms/sss-forms/best-start/BS-pregnant', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-child-check-3')
})

router.post('/forms/sss-forms/best-start/BS-child-check-3', function (req, res) {
  var childCheck = req.session.data['BSG-new-born-check'];

  if (childCheck === 'yesBut') {
     return res.redirect('/forms/sss-forms/best-start/BS-bad');
  } else {
      return res.redirect('/forms/sss-forms/best-start/BS-about-you');
  }

})

router.post('/forms/sss-forms/best-start/BS-about-you', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-your-details')
})

router.post('/forms/sss-forms/best-start/BS-your-details', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-your-address')
})

router.post('/forms/sss-forms/best-start/BS-your-address', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-sending-letters')
})

router.post('/forms/sss-forms/best-start/BS-sending-letters', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-partner')
})

router.post('/forms/sss-forms/best-start/BS-partner', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-partner-details')
})

router.post('/forms/sss-forms/best-start/BS-partner-details', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-about-child')
})

router.post('/forms/sss-forms/best-start/BS-about-child', function (req, res) {
  var pregnantCheck = req.session.data['BSG-pregnant-check'];
  var newbornCheck = req.session.data['BSG-new-born-check'];
  var childCheck = req.session.data['BSG-child-check'];
  if (pregnantCheck === 'Yes') {
     return res.redirect('/forms/sss-forms/best-start/BS-pregnancy-details');
  }
  if (newbornCheck === 'Yes') {
      return res.redirect('/forms/sss-forms/best-start/BS-baby-under-6mo')
  }
  if (newbornCheck === 'yesBut'){
      return res.redirect('/forms/sss-forms/best-start/BS-baby-under-6mo-died')
  }
  if (childCheck === 'Yes'){
    return res.redirect('/forms/sss-forms/best-start/BS-child-under-6years')
  }
  return res.redirect('/forms/sss-forms/best-start/BS-other-children')
})

router.post('/forms/sss-forms/best-start/BS-pregnancy-details', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-pregnancy-due-date')
})

router.post('/forms/sss-forms/best-start/BS-pregnancy-due-date', function (req, res) {
  var newbornCheck2 = req.session.data['BSG-new-born-check'];
  var childCheck2 = req.session.data['BSG-child-check'];
  var otherChildCheck2 = req.session.data['BSG-child-check-2'];
  if (newbornCheck2 === 'Yes') {
    return res.redirect('/forms/sss-forms/best-start/BS-baby-under-6mo')
  }
  if (newbornCheck2 === 'yesBut') {
    return res.redirect('/forms/sss-forms/best-start/BS-baby-under-6mo-died')
  }
  if (childCheck2 === 'Yes') {
    return res.redirect('/forms/sss-forms/best-start/BS-child-under-6years')
  }
  if (otherChildCheck2 === 'Yes') {
    return res.redirect('/forms/sss-forms/best-start/BS-other-children')
  }
  return res.redirect('/forms/sss-forms/best-start/BS-contact-you')
})

router.post('/forms/sss-forms/best-start/BS-baby-under-6mo', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-baby-box')
})

router.post('/forms/sss-forms/best-start/BS-baby-box', function (req, res) {
  var childCheck3 = req.session.data['BSG-child-check'];
  var otherChildCheck3 = req.session.data['BSG-child-check-2'];
  if (childCheck3 === 'Yes') {
    return res.redirect('/forms/sss-forms/best-start/BS-child-under-6years')
  }
  if (otherChildCheck3 === 'Yes') {
    return res.redirect('/forms/sss-forms/best-start/BS-other-children')
  }
  return res.redirect('/forms/sss-forms/best-start/BS-contact-you')
})

router.post('/forms/sss-forms/best-start/BS-baby-certificate', function (req, res) {
  var childCheck4 = req.session.data['BSG-child-check'];
  var otherChildCheck4 = req.session.data['BSG-child-check-2'];
  if (childCheck4 === 'Yes') {
    return res.redirect('/forms/sss-forms/best-start/BS-child-under-6years')
  }
  if (otherChildCheck4 === 'Yes') {
    return res.redirect('/forms/sss-forms/best-start/BS-other-children')
  }
  return res.redirect('/forms/sss-forms/best-start/BS-contact-you')
})

router.post('/forms/sss-forms/best-start/BS-child-under-6years', function (req, res) {
  var otherChildCheck5 = req.session.data['BSG-child-check-2'];
  if (otherChildCheck5 === 'Yes') {
    return res.redirect('/forms/sss-forms/best-start/BS-other-children')
  }
  return res.redirect('/forms/sss-forms/best-start/BS-contact-you')
})

router.post('/forms/sss-forms/best-start/BS-other-children', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-contact-you')
})

router.post('/forms/sss-forms/best-start/BS-contact-you', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-contact-details')
})

router.post('/forms/sss-forms/best-start/BS-contact-details', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-notifications')
})

router.post('/forms/sss-forms/best-start/BS-notifications', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-letters')
})

router.post('/forms/sss-forms/best-start/BS-letters', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-language')
})

router.post('/forms/sss-forms/best-start/BS-language', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-payment-details')
})

router.post('/forms/sss-forms/best-start/BS-payment-details', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-payment-account')
})

router.post('/forms/sss-forms/best-start/BS-payment-account', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-anything-else')
})

router.post('/forms/sss-forms/best-start/BS-anything-else', function (req, res) {
  res.redirect('/forms/sss-forms/best-start/BS-check-answers')
})
