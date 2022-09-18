//Callback predefinida
a("Hola a todos", b);


a("Hola a todos", function(s) {
	console.log(s + ", como estan?");
});


function a(s, callback) {
	callback(s);
}

function b(s) {
	console.log(s + "!!!");
}