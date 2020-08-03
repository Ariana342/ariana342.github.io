
function setUpBoard(){
	//One-one
	var inner_grid = document.createElement('div');
	inner_grid.setAttribute('class', 'inner-grid-container');
	inner_grid.setAttribute('id','one-one');
	document.getElementById('outer-grid-container').appendChild(inner_grid);

	for(i = 0; i < 5; i++){
		for(j = 0; j < 5; j++){
			var inner_home = document.createElement('div');
			inner_home.setAttribute('class', 'inner-home-grid-item');
			document.getElementById('one-one').appendChild(inner_home);
		}
		var outer_home = document.createElement('div');
		outer_home.setAttribute('class', 'outer-home-grid-item one-one');
		document.getElementById('one-one').appendChild(outer_home);
	}
	for(i = 0; i < 6; i++){
		var outer_home = document.createElement('div');
		outer_home.setAttribute('class', 'outer-home-grid-item one-one');
		document.getElementById('one-one').appendChild(outer_home);
	}
/*
	//One-two
	var inner_container = document.createElement('div');
	inner_container.setAttribute('class', 'inner-grid-container-two');
	inner_grid.setAttribute('id','one-two');
	document.getElementById('outer-grid-container').appendChild(inner_container);

	for(i = 0; i < 6; i++){
		var grid_item = document.createElement('div');
		grid_item.setAttribute('class', 'grid-item');
		document.getElementById('one-two').appendChild(grid_item);
	}
*/
	//One-three
	var inner_grid = document.createElement('div');
	inner_grid.setAttribute('class', 'inner-grid-container');
	inner_grid.setAttribute('id','one-three');
	document.getElementById('outer-grid-container').appendChild(inner_grid);

	for(i = 0; i < 5; i++){
		var outer_home = document.createElement('div');
		outer_home.setAttribute('class', 'outer-home-grid-item one-three');
		document.getElementById('one-three').appendChild(outer_home);

		for(j = 0; j < 5; j++){
			var inner_home = document.createElement('div');
			inner_home.setAttribute('class', 'inner-home-grid-item');
			document.getElementById('one-three').appendChild(inner_home);
		}	
	}
	for(i = 0; i < 6; i++){
		var outer_home = document.createElement('div');
		outer_home.setAttribute('class', 'outer-home-grid-item one-three');
		document.getElementById('one-three').appendChild(outer_home);
	}
/*
	//Two-one
	var inner_container = document.createElement('div');
	inner_container.setAttribute('class', 'inner-grid-container');
	inner_container.setAttribute('id', 'two-one');
	document.getElementById('outer-grid-container').appendChild(inner_container);

	for(i = 0; i < 6; i++){
		var grid_item = document.createElement('div');
		grid_item.setAttribute('class', 'grid-item');
		document.getElementById('two-one').appendChild(grid_item);
	}

	//Two-two
	var center = document.createElement('div');
	center.setAttribute('class', 'center-wrapper');
	document.getElementById('outer-grid-container').appendChild(center);

	var tri = document.createElement('div');
	tri.setAttribute('class', 'triangles');
	tri.setAttribute('id','triangles');
	document.getElementById('center-wrapper').appendChild(tri);

	var down = document.createElement('div');
	down.setAttribute('class', 'down');
	down.setAttribute('id','down');
	document.getElementById('triangles').appendChild(down);

	var up = document.createElement('div');
	up.setAttribute('class', 'up');
	up.setAttribute('id','up');
	document.getElementById('triangles').appendChild(up);

	var right = document.createElement('div');
	right.setAttribute('class', 'right');
	right.setAttribute('id','right');
	document.getElementById('triangles').appendChild(right);

	var left = document.createElement('div');
	left.setAttribute('class', 'left');
	left.setAttribute('id','left');
	document.getElementById('triangles').appendChild(left);

	//Two-three
	var inner_container = document.createElement('div');
	inner_container.setAttribute('class', 'inner-grid-container');
	inner_container.setAttribute('id', 'two-three');
	document.getElementById('outer-grid-container').appendChild(inner_container);

	for(i = 0; i < 6; i++){
		var grid_item = document.createElement('div');
		grid_item.setAttribute('class', 'grid-item');
		document.getElementById('two-three').appendChild(grid_item);
	}
*/
	//Three-one
	var inner_container = document.createElement('div');
	inner_container.setAttribute('class', 'inner-grid-container');
	inner_container.setAttribute('id', 'three-one');
	document.getElementById('outer-grid-container').appendChild(inner_container);

	for(i = 0; i < 6; i++){
		var outer_home = document.createElement('div');
		outer_home.setAttribute('class', 'outer-home-grid-item three-one');
		document.getElementById('three-one').appendChild(outer_home);
	}

	for(i = 0; i < 5; i++){
		for(j = 0; j < 5; j++){
			var inner_home = document.createElement('div');
			inner_home.setAttribute('class', 'inner-home-grid-item');
			document.getElementById('three-one').appendChild(inner_home);
		}
		var outer_home = document.createElement('div');
		outer_home.setAttribute('class', 'outer-home-grid-item three-one');
		document.getElementById('three-one').appendChild(outer_home);
	}
/*	
	//Three-two
	var inner_container = document.createElement('div');
	inner_container.setAttribute('class', 'inner-grid-container-two');
	inner_grid.setAttribute('id','three-two');
	document.getElementById('outer-grid-container').appendChild(inner_container);

	for(i = 0; i < 6; i++){
		var grid_item = document.createElement('div');
		grid_item.setAttribute('class', 'grid-item');
		document.getElementById('three-two').appendChild(grid_item);
	}
*/
	//Three-three
	var inner_grid = document.createElement('div');
	inner_grid.setAttribute('class', 'inner-grid-container');
	inner_grid.setAttribute('id','three-three');
	document.getElementById('outer-grid-container').appendChild(inner_grid);

	for(i = 0; i < 6; i++){
		var outer_home = document.createElement('div');
		outer_home.setAttribute('class', 'outer-home-grid-item three-three');
		document.getElementById('three-three').appendChild(outer_home);
	}

	for(i = 0; i < 5; i++){
		var outer_home = document.createElement('div');
		outer_home.setAttribute('class', 'outer-home-grid-item three-three');
		document.getElementById('three-three').appendChild(outer_home);

		for(j = 0; j < 5; j++){
			var inner_home = document.createElement('div');
			inner_home.setAttribute('class', 'inner-home-grid-item');
			document.getElementById('three-three').appendChild(inner_home);
		}	
	}
}

/*
	if(num_1 == 1){
		var dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-5').appendChild(dot);
	}
	else if(num_1 == 2){
		var dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-1').appendChild(dot);
		dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-9').appendChild(dot);
	}
	else if(num_1 == 3){
		var dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-1').appendChild(dot);
		dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-5').appendChild(dot);
		dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-9').appendChild(dot);
	}
	else if(num_1 == 4){
		var dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-1').appendChild(dot);
		dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-3').appendChild(dot);
		dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-7').appendChild(dot);
		dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-9').appendChild(dot);
	}
	else if(num_1 == 5){
		var dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-1').appendChild(dot);
		dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-3').appendChild(dot);
		dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-5').appendChild(dot);
		dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-7').appendChild(dot);
		dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-9').appendChild(dot);
	}
	else{
		var dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-1').appendChild(dot);
		dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-3').appendChild(dot);
		dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-4').appendChild(dot);
		dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-6').appendChild(dot);
		dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-7').appendChild(dot);
		dot = document.createElement('div');
		dot.setAttribute('class','dot');
		document.getElementById('dot-9').appendChild(dot);
	}
*/