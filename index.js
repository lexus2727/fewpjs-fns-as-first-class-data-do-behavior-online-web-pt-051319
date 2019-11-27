/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time) {
	let timeArray = time.split(":")
	let hour = parseFloat(timeArray[0])
	if (hour === NaN) {
		return "Incorrect format"
	}
	else if (hour < 12) {
		return "Good Morning"
	} 
	else if (hour > 17) {
		return "Good Evening"
	}
	else if (hour >= 12 && hour <= 17) {
		return "Good Afternoon"
	}
}



function displayMessage(string) {
	document.querySelector("#greeting").innerText = string
	return
}