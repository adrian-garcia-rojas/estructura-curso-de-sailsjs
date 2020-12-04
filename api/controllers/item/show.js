const global_items = [
  {id: 1, text: 'lampara', length: 7},
  {id: 2, text: 'tostador', length: 8},
  {id: 3, text: 'mermelada', length: 9}
 ]

module.exports = {


  friendlyName: 'Show',


  description: 'Show item.',


  inputs: {
    id: {
      type: 'number',
      required: true
    }
  },


  exits: {
    success: {},
    error: {
      responseType: 'notFound'
    }
  },


  fn: async function (inputs, exits) {

    let id = inputs.id
    let item = global_items.filter(item => parseInt(item.id) === parseInt(id))
    // console.log(item) //una forma de ver lo que envia el back desde la terminal

   if(item.length > 0){
     return exits.success(item)
   }
   else{
     return exits.error()
   }

  }


};
