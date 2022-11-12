const router = require('express').Router();
const { checkProfile, checkAvatar, checkUserById } = require('../validation/validation');

const {
  getUser,
  getUserById,
  updateProfile,
  updateAvatar,
  getCurrentUser,

} = require('../controllers/users');

router.get('/', getUser);

router.get('/me', getCurrentUser);
router.get('/:id', checkUserById, getUserById);

router.patch('/me', checkProfile, updateProfile);

router.patch('/me/avatar', checkAvatar, updateAvatar);

module.exports = router;
