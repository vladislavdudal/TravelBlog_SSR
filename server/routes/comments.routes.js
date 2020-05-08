const {Router} = require('express')
const {create} = require('../controllers/comments.controller')
const router = Router()

// /api/comment
router.post('/', create)

module.exports = router  