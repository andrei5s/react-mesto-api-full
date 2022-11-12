const router = require('express').Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

const {
  checkNewCard,
  checkCardId,
  checkDeletedCardId,
} = require('../validation/validation');

router.get('/', getCards);

router.post('/', checkNewCard, createCard);

router.delete('/:cardId', checkDeletedCardId, deleteCard);

router.put('/:cardId/likes', checkCardId, likeCard);

router.delete('/:cardId/likes', checkCardId, dislikeCard);

module.exports = router;
