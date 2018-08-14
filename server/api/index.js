const { Router } = require('express')
const workers = require('./workers')
const companies = require('./companies')

const router = Router()

// Add Routes
router.use('/workers', workers)
router.use('/companies', companies)

module.exports = router