const db = require('../db')

class UserController{
    async createUser(req,res){
        const {lastname, name, fathname, category} = req.body
        const newPerson = await db.query('INSERT INTO person (lastname, name, fathname, category) values ($1, $2, $3, $4) RETURNING *', [lastname, name, fathname, category])

        res.json(newPerson.rows[0])
    }
    async getUsers(req,res){
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }
    async getOneUser(req,res){
        const id = req.params.id
        const user = await db.query('SELECT * FROM person where id = $1', [id])
        res.json(user.rows[0])
    }
    async updateUser(req,res){
        const {id, lastname, name, fathname, category} = req.body
        const user = await db.query('UPDATE person set lastname = $1, name = $2, fathname = $3, category = $4 where id = $5 RETURNING *', 
        [lastname, name, fathname, category, id])
        res.json(user.rows[0])
    }
    async deleteUser(req,res){
        const id = req.params.id
        const user = await db.query('DELETE FROM person where id = $1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController()