var players[];
var playerHomes[];

//Players give out their information
//Game board is set up
//Each home gets four players
//Roll dice option

function rollDice(){
	//var num_1 = Math.random() * (6 - 1) + 1; 
	//var num_2 = Math.random() * (6 - 1) + 1; 

	alert('Hello');
}

function addToPlayerArray(player){
	players.appendChild(player);
}

function postInfoForm(){
	alert('Alert');
}

function createPlayer(){
	var player = postInfoForm();

	var player = {
	  userName: user_name,
	  homeName: home_name,
	  home: user_home;
	};
	addToPlayerArray(player);
}

function getPlayers(){
	for(i = 0; i < 4; i++)
		createPlayer();
}

function togglePopup(id){
  document.getElementById(id).classList.toggle("active");
}

function startGame(){
	playerHomes = ['sakura','cicada','temple','snow'];
	getPlayers();

	setUpBoard();
}

function initializeHomes(){
	var sakura = {
	  userName: user_name,
	  baseName: base_name,
	  base: user_base;
	};
}



