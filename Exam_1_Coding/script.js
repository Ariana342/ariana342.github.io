var picture_pieces = [];
var picture_root_name = "picture";
var array_length = 9;
var used_nums = [];
var num_swaps = 0;

function populateArray(){
	var temp_name;
	for (i = 0; i < array_length; i++) {
		temp_name = picture_root_name;
  		temp_name += "_";
  		temp_name += i;
  		picture_pieces.push(temp_name);
	}
	addPiecesToDiv();
}

function printArray(){
	for (i = 0; i < array_length; i++) {
		alert(picture_pieces[i]);
	}
}

function wasUsed(num){
	if(used_nums === undefined || used_nums.length == 0)
		return false;
	return used_nums.includes(num);
}

function addItemsToContainer(){
	for (i = 0; i < array_length; i++){
		var div = document.createElement('div');
		div.setAttribute('class', 'grid-item');
		var div_name = picture_root_name+'_'+i;
		div.setAttribute('id',div_name);
		document.getElementById('container').appendChild(div);
	}
	addImgsToItems();
}

function addImgsToItems(){
	var rand_num;
	for (i = 0; i < array_length; i++){
		rand_num = Math.floor(Math.random() * 9);
		while(wasUsed(rand_num))
			rand_num = Math.floor(Math.random() * 9);
		used_nums.push(rand_num);
		var temp_name = picture_root_name+'_'+i;
		var img = document.createElement('img');
		var img_name = picture_root_name+'_'+rand_num+'.jpg';
		img.setAttribute('src',img_name);
		document.getElementById(temp_name).appendChild(img);
		var check = document.createElement('input');
  		check.setAttribute('type', 'checkbox');
  		check.setAttribute('id', i);
  		check.setAttribute('class','checkmark');
  		document.getElementById(temp_name).appendChild(check);
	}
}

function invalidNumCheck(){
	var num_checked = 0;
	for(i = 0; i < array_length; i++){
		var temp = document.getElementById(i);
		if(temp.checked)
			num_checked++;
	}
	return (num_checked !== 2);
}

function checkForSolution(){
	var num_matched = 0;
	for(i = 0; i < array_length; i++){
		var temp_div = document.getElementById(picture_root_name+'_'+i);
		var temp_src = temp_div.firstChild.getAttribute('src');
		var temp_alt = temp_src.replace('.jpg','');
		if(temp_div.id == temp_alt)
			num_matched++;
		else
			break;
	}
	if(num_matched === 9){
		document.getElementById('puzzle').innerHTML = 'The number of swaps used: '+num_swaps;
		togglePopup('popup-2');
	}
}

function swap(){
	if(invalidNumCheck())
		togglePopup('popup-1');
	else{
		var idx_1, idx_2;
		for(i = 0; i < array_length; i++){
			var temp = document.getElementById(i);
			if(temp.checked && idx_1 === undefined)
				idx_1 = temp.getAttribute('id');
			else if(temp.checked){
				idx_2 = temp.getAttribute('id');
				break;
			}
		}
		var div_1 = document.getElementById(picture_root_name+'_'+idx_1);
		var div_2 = document.getElementById(picture_root_name+'_'+idx_2);

		var src_1 = div_1.firstChild.getAttribute('src');
		var src_2 = div_2.firstChild.getAttribute('src');

		div_1.firstChild.setAttribute('src',src_2);
		div_2.firstChild.setAttribute('src',src_1);
		num_swaps++;
		checkForSolution();
	}
}

function togglePopup(id){
  document.getElementById(id).classList.toggle("active");
}
