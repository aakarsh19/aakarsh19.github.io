		

var ideabinText = "Built using Node.Js for back-end, and CSS/HTML for front-end <br>IdeaBin helps connect young programmers with users who listed their problems, to help ﬁx the problem for prizes.<br> It was built during a 36-hour long hackathon at Yale University.";
var psychbotText = "PsychBot is a chatbot that helps deal with general psychological problems. Built in Node.js/Javascript, using Cisco Spark ChatBot API for chat-box, and Nuance Nina Knowledge (NiK) API to analyze text or speech. Additionally, it was one of the first third-party Cisco Spark chatbot to implement voice functionality, which was built using the Bing Speech API.";
var loandataText = "The Loan data exploration plotted the different conditions against each other to find out what really affects interest rates. Additionally, the prediction was based on the best fitting model out of the many we implemented. Built using python and a standard Jupyter and SkLearn workflow, along with a Google compute background, during a 36-hour long hackathon.";

document.getElementById("c1").addEventListener('click', function() {
	var tmp = document.getElementById("ideabin").innerText;
	document.getElementById("ideabin").innerHTML = ideabinText;
	ideabinText = tmp;
});

document.getElementById("c2").addEventListener('click', function(){
	var tmp = document.getElementById("psychbot").innerText;
	document.getElementById("psychbot").innerHTML = psychbotText;
	psychbotText = tmp;
});

document.getElementById("c3").addEventListener('click', function(){
	var tmp = document.getElementById("loandata").innerText;
	document.getElementById("loandata").innerHTML = loandataText;
	loandataText = tmp;
})

/*
var proj = document.getElementsByClassName("card");

for (var i = 1; i <= proj.length; i++) {
	let currentProj = proj[i];
	console.log(i + "hello: " + currentProj);
	currentProj.addEventListener('click', function(){
		console.log(this.id);
		displayProject(this.id);
	});
};


function displayProject(x) {
	if (x === "c1") {
		var tmp = document.getElementById("ideabin").innerText;
		document.getElementById("ideabin").innerHTML = ideabinText;
		ideabinText = tmp;
	}
	if (x === "c2") {
		var tmp = document.getElementById("psychbot").innerText;
		document.getElementById("psychbot").innerHTML = psychbotText;
		psychbotText = tmp;
	}
};
*/