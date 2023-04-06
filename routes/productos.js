let express = require('express');
let productoController = require('../controller/productoController.js') 
let router = express.Router();

router.get('/:idProductos', productoController.detalle);
  
router.get('/:idProductos/comentarios', productoController.detalleComentario);
  
  module.exports = router;
  
  