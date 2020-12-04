/**
 * WordController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 const globalWords = [
     {id: 1, text: 'hola', length: 4},
     {id: 2, text: 'adios', length: 5},
     {id: 3, text: 'bye', length: 3}
    ]

module.exports = {
  
    list: function(req, res){
        //obtener los elementos
        //retornar los elementos
        
        let words = globalWords

        return res.status(200).json(words)

    },

    show: function(req, res){
        //obtener id elemento y retornar respuesta o un not fount 
        let id = req.params.id
        let word = globalWords.filter(word => parseInt(word.id) === parseInt(id))

        if(word){
            return res.json(word)
        }
        else{
            return res.status(404).json({error: 'no se ha encontrado el id'})
        }
    },

    store: function(req, res){
        //obtener los datos de peticion
        //insert
        //retornar el objeto con status 201 qie indica que se creo objeto

        let word = {
            id: parseInt(Math.random()*10000),
            text: req.body.text,
            length: req.body.text.length
        }

        globalWords.push(word)

        return res.status(201).json(word)
    }

};

