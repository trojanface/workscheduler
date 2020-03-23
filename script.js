$("#currentDay").text(moment().format("dddd")+", "+moment().format("MMMM Do"));

let jobsArray = new Array; //The array to store the hourly tasks in.




for (let i = 9; i < 18; i++) {
		let newRow = $("<div class='time-block heightSpacer row'>");

	if (i <= 12) {
	var newTimeCol = $("<div class='hour  col-md-2'>").text(i+"am");
	} else {
		 newTimeCol = $("<div class='hour  col-md-2'>").text(i-12+"pm");
	}
	if (localStorage.getItem(i) !== null) {
	var savedValue = localStorage.getItem(i);
	} else {
		savedValue = "";
	}
	if (moment().format("H") > i) {
		var newTextCol = $("<div class='col-md-8'> <textarea class='textInput"+i+" past textInput'>"+savedValue+"</textarea></div>");
	} 
	if (moment().format("H") == i) {
		 newTextCol = $("<div class='col-md-8'> <textarea class='textInput"+i+" present textInput'>"+savedValue+"</textarea></div>");
	}
	if (moment().format("H") < i) {
		 newTextCol = $("<div class='col-md-8'> <textarea class='textInput"+i+" future textInput'>"+savedValue+"</textarea></div>");
	} 

	let newSaveCol = $("<div class='col-md-2'><button type='button'  class='saveBtn  btn btn-primary' data-hour="+i+" ><i class='far fa-save'></i></button></div>");

	$(newRow).append(newTimeCol);
	$(newRow).append(newTextCol);
	$(newRow).append(newSaveCol);
	$(".container").append(newRow);
}

$(".saveBtn").on("click", function() {
	console.log($(this).data("hour"));
	console.log($(".textInput"+$(this).data("hour")).val());
	localStorage.setItem($(this).data("hour"),$(".textInput"+$(this).data("hour")).val());
});