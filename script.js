$("#currentDay").text(moment().format("dddd") + ", " + moment().format("MMMM Do")); //Displays the current date.
let jobsArray = new Array; //The array to store the hourly tasks in.

for (let i = 9; i < 18; i++) { //cycles through the hours in the work day
	let newRow = $("<div class='time-block heightSpacer row'>"); //creates a new row to contain all the to-do elements.
	if (i <= 12) { //differentiating between morning and afternoon.
		var newTimeCol = $("<div class='hour  col-md-2'>").text(i + "am");
	} else {
		newTimeCol = $("<div class='hour  col-md-2'>").text(i - 12 + "pm");
	}
	if (localStorage.getItem(i) !== null) { //checks if there is anything stored in local storage
		var savedValue = localStorage.getItem(i);
	} else {
		savedValue = "";
	}
	if (moment().format("H") > i) { //styles the hours depending upon past, present and future, creates dynamic class names for the element and includes any loaded data from local storage.
		var newTextCol = $("<div class='col-md-8'> <textarea class='textInput" + i + " past textInput'>" + savedValue + "</textarea></div>");
	}
	if (moment().format("H") == i) {
		newTextCol = $("<div class='col-md-8'> <textarea class='textInput" + i + " present textInput'>" + savedValue + "</textarea></div>");
	}
	if (moment().format("H") < i) {
		newTextCol = $("<div class='col-md-8'> <textarea class='textInput" + i + " future textInput'>" + savedValue + "</textarea></div>");
	}
	//this is the save button possessing the icon from fontawesome
	let newSaveCol = $("<div class='col-md-2'><button type='button'  class='saveBtn  btn btn-primary' data-hour=" + i + " ><i class='far fa-save'></i></button></div>");
	//this adds the created elements to the appropriate places in the DOM.
	$(newRow).append(newTimeCol);
	$(newRow).append(newTextCol);
	$(newRow).append(newSaveCol);
	$(".container").append(newRow);
}

$(".saveBtn").on("click", function () {//this function runs when the save button is used.
	localStorage.setItem($(this).data("hour"), $(".textInput" + $(this).data("hour")).val()); //this saves the text in the text area under the hour it's related to
});