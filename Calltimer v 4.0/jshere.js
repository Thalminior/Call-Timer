window.onload = function () {
  
  
	var minutes = 00;
	var seconds = 00; 
	var tens = 00; 
	var appendTens = document.getElementById("tens")
	var appendSeconds = document.getElementById("seconds")
	var appendMinutes = document.getElementById("minutes")
	var callTime = document.getElementById("calltime")
	var afterCallTime = document.getElementById("aftercalltime")
	var auxTime = document.getElementById("auxtime")	
	var buttonStart = document.getElementById('button-start');
	var buttonStop = document.getElementById('button-stop');
	var buttonReset = document.getElementById('button-reset');
	var buttonNext = document.getElementById('button-next');
	var step = 0; 
	var Interval ;

buttonStart.onclick = function() {
	if (step == 0 ){
		clearInterval(Interval);
		Interval = setInterval(startTimer, 10);
		buttonStart.innerHTML = "Aftercall";
		document.getElementById("button-start").style.background = "yellow";
	}
	if (step == 1 ) {
		callTime.innerHTML = "Call Time: " + minutes + ":" + seconds;
		buttonStart.innerHTML = "RESET";
		nextStep();
		document.getElementById("button-start").style.background = 'red';
	}
/* 	if (step == 2 ){
		afterCallTime.innerHTML ="Aftercall: "+ minutes + ":" + seconds;
		buttonStart.innerHTML = "Extra Aux";
		nextStep();
	}
	if (step == 3 ){
		auxTime.innerHTML ="Aux Time: "+ minutes + ":" + seconds;
		buttonStart.innerHTML = "RESET";
		nextStep();
	} */
	if (step <= 2){
		step++;
	
	}	
	if (step == 3){
		reset();
	}
	console.log(step)
}
buttonStop.onclick = function() {
		clearInterval(Interval);
  }
  
buttonReset.onclick = function(){
	reset();
}

function reset() {

	clearInterval(Interval);
	tens = "00";
	seconds = "00";
	minutes = "00";
	/* appendTens.innerHTML = tens; */
	appendSeconds.innerHTML = seconds;
	appendMinutes.innerHTML = minutes;
	callTime.innerHTML = " ";
	afterCallTime.innerHTML = " ";
	auxTime.innerHTML = " ";
	step = 0
	buttonStart.innerHTML = "Start" 
	document.getElementById("button-start").style.background = "lightgreen";

  }
  
 

function nextStep(){
	

	clearInterval(Interval);
	tens = "00";
	seconds = "00";
	minutes = "00";
	/* appendTens.innerHTML = tens; */
	appendSeconds.innerHTML = seconds;
	appendMinutes.innerHTML = minutes;
	Interval = setInterval(startTimer, 10);
  }
   
  
function startTimer () {
	tens++; 
    

    if (tens > 99) {
		seconds++;
		appendSeconds.innerHTML = "0" + seconds;
		tens = 0;
    }
    
    if (seconds > 9){
		appendSeconds.innerHTML = seconds;
    }
	
	if (seconds > 59){
		minutes++
		appendMinutes.innerHTML = "0" + minutes;
		seconds = 0;
		appendSeconds.innerHTML = "0" + 0;
	}
	if (minutes > 9){
		appendMinutes.innerHTML = minutes;
	}
  }
  

}