'use strict'

const Card = use('App/Model/Card')

class CardsController {
	* getAll (request, response){
		const all_cards = yield Card.all()
		// console.log(all_cards)
    	response.json(all_cards)
	}

	* addCard (request, response){
		var username = request.input('username')
		var topic = request.input('topic')
		var contents = request.input('contents')

		var card = yield Card.create({
			username: username,
			topic: topic,
			contents: contents
		})

		response.send(card)
	}
}
module.exports = CardsController

