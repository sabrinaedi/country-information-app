
var fs = require ('fs')
var readMe = require ('./json-file-reader')

// command line: node nodefile.js Netherlands

// Take in a parameter from the command line

readCountry(process.argv[2])


// Use readfile and json.parse to read and parse the countries.json file
function readCountry ( x ) {
//for loop runs through the objects in the string and identifies the object the value of which matches the given x (which is the value matching the "names" key)
//loop prints the name of the country and top Level Domain
		
		readMe(__dirname + '/countries.json', function ( array ) {


		for (var i=0; i<array.length; i++) {

			if (array[i].name == x) {
				console.log("Country: " + array[i].name )
				console.log("Top Level Domain: " + array[i].topLevelDomain)
			}
		}

	})
}



// [{ "name":"Netherlands", "topLevelDomain": [".nl"]} ]

/// MODIFY TO INCLUDE NON-CAPITALISED WORDS


// return readM

