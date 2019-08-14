



//Creating the To-dos fucntion 
function createNewElement() {
	var li = document.createElement('li');
	var theInputValue = document.getElementById("the-input").value;
	var textNode = document.createTextNode(theInputValue);
	li.appendChild(textNode);
	//console.log(li)

	if (theInputValue==='') {
		alert("Insert a task to do")
	} else{
		document.getElementById("the-ul").appendChild(li);
	}

	document.getElementById("the-input").value="";

	var thePanTag = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	thePanTag.className="close";
	thePanTag.appendChild(txt);
	li.appendChild(thePanTag);

	//Removing items when clicked
	// var closeButton = document.querySelectorAll(".close");
	// console.log(closeButton);
	// for (i = 0; i<closeButton.lenght; i++){
	// 	closeButton[i].onclick =function(){
	// 		var theDiv = this.parentElement;
	// 		theDiv.style.display = "none";
	// 	}
	// }

}




//creating close button
//var closeButton = document.getElementsByClassName("close");

var myList =document.getElementsByTagName("li");
var index;
for( index = 0; index < myList.length; index++){
	var aSpanTag = document.createElement("SPAN");
	var someTxt = document.createTextNode("\u00D7");
	aSpanTag.className ="close";
	aSpanTag.appendChild(someTxt);
	myList[index].appendChild(aSpanTag);
}

//Close button
var closeButton = document.getElementsByClassName("close");
	
//Removing items when clicked
	for (i = 0; i < closeButton.length; i++){
		closeButton[i].onclick = function(){
			var theDiv = this.parentElement;
			theDiv.style.display = "none";
		}
	}


//creating checked todo
var ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event){
	console.log(event);
	if (event.target.tagName === "LI") {
		event.target.classList.toggle('checked');
	}
}, false);