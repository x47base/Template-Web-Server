const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendStatus(202);
});

const example = require('./example')
router.use('/example', example)


module.exports = router;
