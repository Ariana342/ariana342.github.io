var players;

function initialize(){
	players = getPlayers();
}

function getPlayers(){
	players = [];
	var player;
	for(i = 0; i < 4; i++){
		player = createNewPlayer();
		players.push(player);
	}
}

function createNewPlayer(){
	var player = prompt('Please enter your name')
}

function rollDice(){
	var min = 1;
    var max = 6;
    var num_1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var num_2 = Math.floor(Math.random() * (max - min + 1)) + min;

	alert('Roll: ( '+num_1+', '+num_2+' )');
	isValidRoll();
}

function isValidRoll(){

}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


