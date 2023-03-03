const express = require('express');
const router = express.Router();

const Item = require("../controllers/ItemController");
Item.carregar();
router.post("", Item.criarItem);
router.get("", Item.listarItens);
router.put("", Item.alterarItem);
router.delete("", Item.excluirItem);

module.exports = router;