/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'GET /ejemplo':{
    fn: function(req, res){
      return res.json({mensaje: 'ok'})
    }
    //-----------------ES PARTE DE LA ESTRUCTURA --------------------
    // view: '',
    // fn: function() {},
    // controller: '',
    // action: ''
  },

  'POST /crear': function(req, res){
    
      let title = req.body.title
      let body = req.body.body

      return res.json({ title: title, body: body})
      //return res.json({mensaje: 'ok post crear'})
      
  },

  'POST /eliminar': function(req, res){
    let id = req.body.id

    return res.json({mensaje: 'este id fue eliminado: '+id})

  },

  'POST /actualizar': function(req, res){
    let name = req.body.name
    return res.json({mensaje: 'este name fue actualizado: '+name})
  },

  // 'GET /controller':{
  //   controller: 'Test',
  //   action:'test'
  // }
'GET /controller': 'TestController.test', //esta es una forma abreviada de hacer la llamada al controlador Test y la funcion test

'GET /controller1/:id': 'TestController.test1', //pasa de parametros

'GET /words': 'WordController.list',
'POST /words/:id': 'WordController.show',
'POST /words': 'WordController.store'






  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
