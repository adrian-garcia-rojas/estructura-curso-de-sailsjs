
const global_items = [
  {id: 1, text: 'lampara', length: 7},
  {id: 2, text: 'tostador', length: 8},
  {id: 3, text: 'mermelada', length: 9}
 ]

module.exports = {


  friendlyName: 'List',


  description: 'List item.',


  inputs: {

  },


  exits: {
    success: {}
  },

/**
 * Entradas
 * @param {Object} inputs Entradas de aplicacion
 */
  fn: async function (inputs, exits) {

    //obtener todos los elementos
    let items = global_items

    return exits.success(items)

  }


};
