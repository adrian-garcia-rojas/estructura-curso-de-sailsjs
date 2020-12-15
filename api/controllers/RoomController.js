/**
 * RoomController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


//const Room = require("../models/Room"); // este constante Room hace que no se pueda enlazar al modelo, almenos en esta version de sails

const _perPage = 10

module.exports = {
  
    // app.com/api/rooms?page=1&perPage=2
    list: async function(req, res){
        let page = Math.abs((req.query.page -1)) || 0
        let perPage = req.query.perPage || _perPage

        let rooms = await Room.find({ limit: perPage, skip: page })

        return res.json(rooms)
    },

    show: async function(req, res){
        let id = req.params.id
        let room = await Room.findOne({
            where: {id: id}
        })

        return res.json(room)
    },

    store: async function(req, res){
        let data = {
            name: req.body.name
        }

        let room = await Room.create(data).fetch()

        return res.status(201).json(room)
    },

    update: async function(req, res){
        let id = req.params.id
        let data = {
            name: req.body.name
        }

        let room = await Room.updateOne({id: id}).set(data)

        return res.json(room)
    },

    destroy: async function(req, res){
        let id = req.params.id
        let room = await Room.destroyOne({id, id})

        return res.json(room)
    }

};

