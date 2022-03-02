const model = require('./model')

module.exports = {
    Users: async(req, res) => {
        try {
            res.send(await model.getUsers())
        } catch(e) {
            console.log(e.message)
        }
    },
    GET_BY_ID: async(req, res) => {
        try {
            const { id } = req.params
            res.send(await model.getUsersById(id))  
        } catch(err) {
            console.log(err)
        }
    }
}