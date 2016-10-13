// import file system to use readFile function and parse
var fs = require ('fs')

//create function that reads and parses a given file, including a callback from the nodeapp.js file (the filename and print function are thus added through nodeapp.js)
function readMe ( filename, callback ) {
	fs.readFile( filename, 'utf8', function(err, data) {
		if (err) throw err
			callback ( JSON.parse(data) )
	})
}

// export the readme function, thereby it is made available for nodeapp.js
module.exports = readMe