
var fs = require ('fs')


function readMe ( filename, callback ) {

	fs.readFile( filename, 'utf8', function(err, data) {
		if (err) throw err
		callback ( JSON.parse(data) )
	})
}




//for loop runs through the objects in the string and identifies the object the value of which matches the given x (which is the value matching the "names" key)
//loop prints the name of the country and top Level Domain
	




module.exports = readMe