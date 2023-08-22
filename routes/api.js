const express = require('express');
var fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendStatus(202);
});

const example = require('./example')
router.use('/example', example)

module.exports = router;
