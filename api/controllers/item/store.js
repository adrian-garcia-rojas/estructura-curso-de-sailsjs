const global_items = [
  {id: 1, text: 'lampara', length: 7},
  {id: 2, text: 'tostador', length: 8},
  {id: 3, text: 'mermelada', length: 9}
 ]
module.exports = {


  friendlyName: 'Store',


  description: 'Store item.',


  inputs: {
    text:{
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {},
    error: {
      requestType: 'notFound'
    }
  },


  fn: async function (inputs, exits) {

    let item = {
      id: parseInt(Math.random()*10000),
      text: inputs.text,
      length: inputs.text.length
    }

    //insert
    global_items.push(item) // ORM ->

    return exits.success(item)

  }


};
