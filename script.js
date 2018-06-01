var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.body;
var css=document.getElementById('css');
var button1=document.getElementById("button1");
var button2=document.getElementById("button2");

//Single button to display two different colors

			// function setgradient(){
			//   var letters = '0123456789ABCDEF';
			//   var col1 = '#';
			//   var col2 = '#';
			// 	  for (var i = 0; i < 6; i++) {
			// 	    col1 += letters[Math.floor(Math.random() * 16)];
			// 	  }
			// 	  color1.value=col1;
			// 	  for (var i = 0; i < 6; i++) {
			// 	     col2 += letters[Math.floor(Math.random() * 16)];
			// 	  } 
			// 	  color2.value=col2;
			// 	body.style.background= "linear-gradient(to right, " + 
			// 	color1.value+ 
			// 	", " +
			// 	color2.value+
			// 	") ";

			// 	css.textContent= body.style.background;
			// }


//To set color in colorpicker 
	function setgradient(){
	body.style.background= "linear-gradient(to right, " + 
		color1.value+ 
		", " +
		color2.value+
		") ";
	css.textContent= body.style.background;
	}


//To set random color when button1 pressed

	function setgradient1(){
	  var letters = '0123456789ABCDEF';
	  var col1 = '#';
	    for (var i = 0; i < 6; i++) {
		    col1 += letters[Math.floor(Math.random() * 16)];
		}
		color1.value=col1;

		body.style.background= "linear-gradient(to right, " + 
		color1.value+ 
		", " +
		color2.value+
		") ";

		css.textContent= body.style.background;
	}	
// To set random color when buton2 pressed
	function setgradient2(){
	  var letters = '0123456789ABCDEF';
	  var col2 = '#';
		for (var i = 0; i < 6; i++) {
		     col2 += letters[Math.floor(Math.random() * 16)];
		} 
		color2.value=col2;

		body.style.background= "linear-gradient(to right, " + 
		color1.value+ 
		", " +
		color2.value+
		") ";

		css.textContent= body.style.background;
	}	


//to create random numbers

		// function getRandomColor() {
		//   var letters = '0123456789ABCDEF';
		//   var color = '#';
		//   for (var i = 0; i < 6; i++) {
		//     color += letters[Math.floor(Math.random() * 16)];
		//   }
		//   color1.value=color;
		//   console.log(color1);
		// }


button1.addEventListener('click', setgradient1);
button2.addEventListener('click', setgradient2);
color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient);
