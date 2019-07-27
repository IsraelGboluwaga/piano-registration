var express = require('express');
var router = express.Router();

const Attendee = require('./attendee');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/', async (req, res) => {
  const { first_name, last_name, email, phone, reference } = req.body;
  const newAttendee = new Attendee({
    first_name, last_name, email, phone, reference
  });
  try {
    await newAttendee.save();
    return res.json({ status: true });
  }
  catch (err) {
    return ({ status: false, data: err });
  }
})

module.exports = router;
