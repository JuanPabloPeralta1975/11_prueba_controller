let productoController = {
    listado: function() {},
    crear: function() {},
    detalle: function(req,res){
        res.send('BIENVENIDO AL PRODUCTO' + req.params.idProductos)
      },
    detalleComentario: function(req,res){
        res.send('BIENVENIDO AL COMENTARIO DEL PRODUCTO' + req.params.idProductos)
      }
}

module.exports = productoController;