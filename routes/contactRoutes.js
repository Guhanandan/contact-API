const express = require('express')
const { getContact, postContact, updateContact, deleteContact ,getContacts } = require('../controller/contactController')

const router = express.Router()

router.route('/').get(getContacts).post(postContact)

router.route('/:id').patch(updateContact).get(getContact).delete(deleteContact)


module.exports = router