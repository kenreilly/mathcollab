    // config/auth.js

    // expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth': {
        'clientID': '294500654073624', // your App ID
        'clientSecret': '4d20808b85f5205a747d94671c7fa211', // your App Secret
        'callbackURL': 'http://localhost:8080/auth/facebook/callback'
    },
    
	'twitterAuth' : {
		'consumerKey' 		: 'pFW70SMQuLQRJwi4QeWBIh0dR',
		'consumerSecret' 	: 'BlEc7ymcJF6Z59A4bZZH4NJBq8ScaoT4RpuGZH0TBYVbRd2J0f',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}
};