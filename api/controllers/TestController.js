/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

//acciones 

test: function(req, res){
    return res.json({mensaje: 'Respuesta controler'})
},

test1: function(req, res){
    let id = req.params.id
    return res.json({mensaje: 'Soy el contrlador con accion test1: id capturado: ' + id})
}

};

