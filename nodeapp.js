// import file system and the json-file-reader to use in this file
var fs = require ('fs')
var readMe = require ('./json-file-reader')

// Take in a parameter from the command line and call function
readCountry(process.argv[2])

// function uses the readMe function defined in the json-file reader
// for loop runs through the objects in the string and identifies the object the value of which matches the given x (which is the value matching the "names" key)
// loop prints the name of the country and top Level Domain
function readCountry ( x ) {
	readMe(__dirname + '/countries.json', function ( array ) {
		for (var i=0; i<array.length; i++) {
			if (array[i].name == x) {
				console.log("Country: " + array[i].name )
				console.log("Top Level Domain: " + array[i].topLevelDomain )
			}
		}
	})
}
