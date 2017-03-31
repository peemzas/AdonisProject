'use strict'

class BasicAuth {

  * handle (request, response, next) {
    // here goes your middleware logic
    // yield next to pass the request to next middleware or controller
    const isLoggedIn = yield request.auth.check()
	  console.log(request.currentUser)
	  if (isLoggedIn) {
	    yield next
	  } else {
	  	response.send({error: 'You must have to Login!!!'})		
	  }
  }
}

module.exports = BasicAuth
