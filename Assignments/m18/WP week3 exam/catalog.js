var quiz = {
	"products": [{
			"title": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue",
			"description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution",
			"image": "1.jpeg",
			"quantity":"10"
		},
		{
			"title": "Mi A2 4GB + 64GB | 6GB + 128GB",
			"description": "15.2cm (5.99) large display",
			"image": "2.jpeg",
			"quantity":"20"
		},
		{
			"title": "Apple iphone 32GB",
			"description": "11.4 cm(4.7)display",
			"image": "3.jpeg",
			"quantity":"30"
		},
		{
			"title": "red mi note 6 pro",
			"description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ",
			"image": "4.jpeg",
			"quantity":"40"
		}
	]
}

var i = 0;
var j = 0;
function display() {
	/*var fname = document.getElementById('abcd').value*/
	document.getElementById('title1').innerHTML = quiz.products[i].title
	document.getElementById('description1').innerHTML = quiz.products[i].description
	/*document.getElementById('image1').innerHTML = quiz.products[i].image*/
	document.getElementById('quantity1').innerHTML = quiz.products[i].quantity
	i = i + 1
	document.getElementById('title2').innerHTML = quiz.products[i].title
	document.getElementById('description2').innerHTML = quiz.products[i].description
	/*document.getElementById('image2').innerHTML = quiz.products[i].image*/
	document.getElementById('quantity2').innerHTML = quiz.products[i].quantity
	i = i + 1
	document.getElementById('title3').innerHTML = quiz.products[i].title
	document.getElementById('description3').innerHTML = quiz.products[i].description
	/*document.getElementById('image3').innerHTML = quiz.products[i].image*/
	document.getElementById('quantity3').innerHTML = quiz.products[i].quantity
	i = i + 1
	document.getElementById('title4').innerHTML = quiz.products[i].title
	document.getElementById('description4').innerHTML = quiz.products[i].description
	/*document.getElementById('image4').innerHTML = quiz.products[i].image*/
	document.getElementById('quantity4').innerHTML = quiz.products[i].quantity
}


function myFunction() {
	document.getElementById("title1").innerHTML = ""
	document.getElementById("description1").innerHTML = ""
	document.getElementById("quantity1").innerHTML = ""
	/*var x = document.getElementById('title1').value;*/
}

function myFunction1() {
	document.getElementById("title2").innerHTML = ""
	document.getElementById("description2").innerHTML = ""
	document.getElementById("quantity2").innerHTML = ""
}

function myFunction2() {
	document.getElementById("title3").innerHTML = ""
	document.getElementById("description3").innerHTML = ""
	document.getElementById("quantity3").innerHTML = ""
}

function myFunction3() {
	document.getElementById("title4").innerHTML = ""
	document.getElementById("description4").innerHTML = ""
	document.getElementById("quantity4").innerHTML = ""
}

var a = 0;
var b = 0;
function func() {
	document.getElementById('title1').innerHTML = quiz.products[a].title
	document.getElementById('description1').innerHTML = quiz.products[a].description
	document.getElementById('quantity1').innerHTML = quiz.products[a].quantity
	/*document.getElementById('akshitha').innerHTML += ""*/
}

function func1() {
	document.getElementById('title2').innerHTML = quiz.products[1].title
	document.getElementById('description2').innerHTML = quiz.products[1].description
	document.getElementById('quantity2').innerHTML = quiz.products[1].quantity
	/*document.getElementById('akshitha').innerHTML += ""*/
}

function func2() {
	document.getElementById('title3').innerHTML = quiz.products[2].title
	document.getElementById('description3').innerHTML = quiz.products[2].description
	document.getElementById('quantity3').innerHTML = quiz.products[2].quantity
	/*document.getElementById('akshitha').innerHTML += ""*/
}

function func3() {
	document.getElementById('title4').innerHTML = quiz.products[3].title
	document.getElementById('description4').innerHTML = quiz.products[3].description
	document.getElementById('quantity4').innerHTML = quiz.products[3].quantity
	/*document.getElementById('akshitha').innerHTML += ""*/
}
/*function function() {
	var ab = "";
	document.getElementById('title1').innerHTML = ab;
}*/

/*function myFunction() {
	document.getElementById('title1').innerHTML = ""
	document.getElementById('description1').innerHTML = ""
	document.getElementById('quantity1').innerHTML = ""
	<input type = "text" id = "title1" value = "">
	var x = document.createElement("INPUT");
	x.setAttribute("type", "text");
	x.setAttribute("value", "");
	document.body.appendChild(x);*/


