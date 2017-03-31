'use strict'

const User = use('App/Model/User')

class UsersController {
	* addUser (request, response){
		var username = request.input('username')
		var email = request.input('email')
		var password = request.input('password')

		try{
			var user_id = yield User.create({
				username: username,
				email: email,
				password: password
			})
			response.send({success: user_id})
		} catch (err) {
			console.log(err.detail)
			response.send({error: err.detail})
		}
	}

	* login (request, response){
		var username = request.input('username')
		var password = request.input('password')

		try {
			var login = yield request.auth.validate(username, password)

			if (login) {
    		response.send({success:'Logged In Successfully'})
    		return
			}
		} catch (err) {
			response.send({error: err.message})
		}
	}
}
module.exports = UsersController

