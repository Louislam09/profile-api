const router = require('express').Router();
const { getUser, getUserBySkill } = require('../controllers');

router.get('/user/:username', getUser);
router.get('/userBySkill/:skill', getUserBySkill);

module.exports = router;
