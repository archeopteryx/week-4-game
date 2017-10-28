//global variables that will be edited and can be used by all functions

var wins = 0;
var losses = 0;
var cardNum = 1;
var blueNum = 0;
var orangeNum = 0;
var greenNum = 0;
var redNum = 0;

 //immediately assign values upon game beginning

 window.onload = function beginGame (event) {

	//assign values to magic card and crystals for this round

	var randCardNum = Math.floor(Math.random()*100)+18;
	cardNum += randCardNum;
	console.log(cardNum);
	$("#numberInsert").text(cardNum);

	var randBlueNum = Math.floor(Math.random()*11)+1;
	blueNum += randBlueNum;
	console.log(blueNum);

	var randOrangeNum = Math.floor(Math.random()*11)+1;
	orangeNum += randOrangeNum;
	console.log(orangeNum);

	var randGreenNum = Math.floor(Math.random()*11)+1;
	greenNum += randGreenNum
	console.log(greenNum);

	var randRedNum = Math.floor(Math.random()*11)+1;
	redNum += randRedNum;
	console.log(redNum);

	//Win-Loss number display
	$('#winNum').text("Wins: " + wins);
	$('#lossNum').text("Losses: " + losses);

};

//assign an action to clicking each crystal
//code is currently super repetitive. If time permits, fix with array and loop.

$("#blueCrystal").on('click',function(){
	cardNum -= blueNum;
	console.log(cardNum);
	$("#numberInsert").text(cardNum);

	if (cardNum === 0) {
		++wins
		alert("The card has disintegrated! The wall in front of you lurches open, revealing the beautiful mid-day sun outside. You have successfully escaped the cave! In the distance, you see the next cave along your journey. It appears this adventure must continue.");
		console.log(wins);

		var randCardNum = Math.floor(Math.random()*101)+19;
		cardNum += randCardNum;
		console.log(cardNum);
		$("#numberInsert").text(cardNum);

		var randBlueNum = Math.floor(Math.random()*11)+1;
		blueNum = randBlueNum;
		console.log(blueNum);

		var randOrangeNum = Math.floor(Math.random()*11)+1;
		orangeNum = randOrangeNum;
		console.log(orangeNum);

		var randGreenNum = Math.floor(Math.random()*11)+1;
		greenNum = randGreenNum
		console.log(greenNum);

		var randRedNum = Math.floor(Math.random()*11)+1;
		redNum = randRedNum;
		console.log(redNum);

		$('#winNum').text("Wins: " + wins);
	}

	else if (cardNum < 0) {
		++losses
		alert("The card has fallen apart in your hands. But you soon find another card along your path. You have failed to escape the cave! It appears that you have been gifted another chance to escape the cave.");
		console.log(losses);

		var randCardNum = Math.floor(Math.random()*100)+18;
		cardNum += randCardNum;
		console.log(cardNum);
		$("#numberInsert").text(cardNum);

		var randBlueNum = Math.floor(Math.random()*11)+1;
		blueNum = randBlueNum;
		console.log(blueNum);

		var randOrangeNum = Math.floor(Math.random()*11)+1;
		orangeNum = randOrangeNum;
		console.log(orangeNum);

		var randGreenNum = Math.floor(Math.random()*11)+1;
		greenNum = randGreenNum
		console.log(greenNum);

		var randRedNum = Math.floor(Math.random()*11)+1;
		redNum = randRedNum;
		console.log(redNum);

		$('#lossNum').text("Losses: " + losses);
	}
});

$("#orangeCrystal").on('click', function(){
	cardNum -= orangeNum;
	console.log(cardNum);
	$("#numberInsert").text(cardNum);

	if (cardNum === 0) {
		++wins
		alert("The card has disintegrated! The wall in front of you lurches open, revealing the beautiful mid-day sun outside. You have successfully escaped the cave! In the distance, you see the next cave along your journey. It appears this adventure must continue.");
		console.log(wins);

		var randCardNum = Math.floor(Math.random()*101)+19;
		cardNum += randCardNum;
		console.log(cardNum);
		$("#numberInsert").text(cardNum);

		var randBlueNum = Math.floor(Math.random()*11)+1;
		blueNum = randBlueNum;
		console.log(blueNum);

		var randOrangeNum = Math.floor(Math.random()*11)+1;
		orangeNum = randOrangeNum;
		console.log(orangeNum);

		var randGreenNum = Math.floor(Math.random()*11)+1;
		greenNum = randGreenNum
		console.log(greenNum);

		var randRedNum = Math.floor(Math.random()*11)+1;
		redNum = randRedNum;
		console.log(redNum);

		$('#winNum').text("Wins: " + wins);
	}

	else if (cardNum < 0) {
		++losses
		alert("The card has fallen apart in your hands. But you soon find another card along your path. You have failed to escape the cave! It appears that you have been gifted another chance to escape the cave.");
		console.log(losses);

		var randCardNum = Math.floor(Math.random()*100)+18;
		cardNum += randCardNum;
		console.log(cardNum);
		$("#numberInsert").text(cardNum);

		var randBlueNum = Math.floor(Math.random()*11)+1;
		blueNum = randBlueNum;
		console.log(blueNum);

		var randOrangeNum = Math.floor(Math.random()*11)+1;
		orangeNum = randOrangeNum;
		console.log(orangeNum);

		var randGreenNum = Math.floor(Math.random()*11)+1;
		greenNum = randGreenNum
		console.log(greenNum);

		var randRedNum = Math.floor(Math.random()*11)+1;
		redNum = randRedNum;
		console.log(redNum);

		$('#lossNum').text("Losses: " + losses);
	}
});

$("#greenCrystal").on('click', function() {
	cardNum -= greenNum;
	console.log(cardNum);
	$("#numberInsert").text(cardNum);

	if (cardNum === 0) {
		++wins
		alert("The card has disintegrated! The wall in front of you lurches open, revealing the beautiful mid-day sun outside. You have successfully escaped the cave! In the distance, you see the next cave along your journey. It appears this adventure must continue.");
		console.log(wins);

		var randCardNum = Math.floor(Math.random()*101)+19;
		cardNum += randCardNum;
		console.log(cardNum);
		$("#numberInsert").text(cardNum);

		var randBlueNum = Math.floor(Math.random()*11)+1;
		blueNum = randBlueNum;
		console.log(blueNum);

		var randOrangeNum = Math.floor(Math.random()*11)+1;
		orangeNum = randOrangeNum;
		console.log(orangeNum);

		var randGreenNum = Math.floor(Math.random()*11)+1;
		greenNum = randGreenNum
		console.log(greenNum);

		var randRedNum = Math.floor(Math.random()*11)+1;
		redNum = randRedNum;
		console.log(redNum);

		$('#winNum').text("Wins: " + wins);
	}

	else if (cardNum < 0) {
		++losses
		alert("The card has fallen apart in your hands. But you soon find another card along your path. You have failed to escape the cave! It appears that you have been gifted another chance to escape the cave.");
		console.log(losses);

		var randCardNum = Math.floor(Math.random()*100)+18;
		cardNum += randCardNum;
		console.log(cardNum);
		$("#numberInsert").text(cardNum);

		var randBlueNum = Math.floor(Math.random()*11)+1;
		blueNum = randBlueNum;
		console.log(blueNum);

		var randOrangeNum = Math.floor(Math.random()*11)+1;
		orangeNum = randOrangeNum;
		console.log(orangeNum);

		var randGreenNum = Math.floor(Math.random()*11)+1;
		greenNum = randGreenNum
		console.log(greenNum);

		var randRedNum = Math.floor(Math.random()*11)+1;
		redNum = randRedNum;
		console.log(redNum);

		$('#lossNum').text("Losses: " + losses);
	}
});

$("#redCrystal").on('click', function() {
	cardNum -= redNum;
	console.log(cardNum);
	$("#numberInsert").text(cardNum);

	if (cardNum === 0) {
		++wins
		alert("The card has disintegrated! The wall in front of you lurches open, revealing the beautiful mid-day sun outside. You have successfully escaped the cave! In the distance, you see the next cave along your journey. It appears this adventure must continue.");
		console.log(wins);

		var randCardNum = Math.floor(Math.random()*101)+19;
		cardNum += randCardNum;
		console.log(cardNum);
		$("#numberInsert").text(cardNum);

		var randBlueNum = Math.floor(Math.random()*11)+1;
		blueNum = randBlueNum;
		console.log(blueNum);

		var randOrangeNum = Math.floor(Math.random()*11)+1;
		orangeNum = randOrangeNum;
		console.log(orangeNum);

		var randGreenNum = Math.floor(Math.random()*11)+1;
		greenNum = randGreenNum
		console.log(greenNum);

		var randRedNum = Math.floor(Math.random()*11)+1;
		redNum = randRedNum;
		console.log(redNum);

		$('#winNum').text("Wins: " + wins);
	}

	else if (cardNum < 0) {
		++losses
		alert("The card has fallen apart in your hands. But you soon find another card along your path. You have failed to escape the cave! It appears that you have been gifted another chance to escape the cave.");
		console.log(losses);

		var randCardNum = Math.floor(Math.random()*100)+18;
		cardNum += randCardNum;
		console.log(cardNum);
		$("#numberInsert").text(cardNum);

		var randBlueNum = Math.floor(Math.random()*11)+1;
		blueNum = randBlueNum;
		console.log(blueNum);

		var randOrangeNum = Math.floor(Math.random()*11)+1;
		orangeNum = randOrangeNum;
		console.log(orangeNum);

		var randGreenNum = Math.floor(Math.random()*11)+1;
		greenNum = randGreenNum
		console.log(greenNum);

		var randRedNum = Math.floor(Math.random()*11)+1;
		redNum = randRedNum;
		console.log(redNum);

		$('#lossNum').text("Losses: " + losses);
	}

});



