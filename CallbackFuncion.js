
a("Mi nombre", b);


a("Mi nombre", function(s) {
	console.log(s + ", es Mateo Alvarez");
});


function a(s, callback) {
	callback(s);
}

function b(s) {
	console.log(s + "!");
}