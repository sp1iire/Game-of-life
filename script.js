// const variables
const myCanvas = document.getElementById("gameCanvas");
const ctx = myCanvas.getContext("2d");
const cell = 30 // cell size of one square resolution
const x = 50; // how many columns in game
const y = 30; // how many rows in game




function board(x,y){
	var board = new Array(x);

for (var i = 0; i < x; i++) {
  board[i] = new Array(y);
}

for (var i2 = 0; i2 < x; i2++) {
	for (var i1 = 0; i1 < y; i1++) {
		let randomnumber = Math.round(Math.random() * 1);
		board[i2][i1] = randomnumber;
};};
return board
}
// board = config with 0 and 1


function board1(x,y){
	var board = new Array(x).fill(0);

for (var i = 0; i < x; i++) {
  board[i] = new Array(y).fill(0);}
	return board
}
// empty array with x y of game 




function dfs(grid1,nb,row,col){

	let rows = grid1.length;
	let cols = grid1[0].length;
	for(let dr =-1;dr<2;dr++){
		for(let dc=-1;dc<2;dc++){
			if(dr == 0 && dc ==0){
				continue;
			};
			if((row + dr < rows) && (row+dr >=0) && (col+dc <cols) && (col+dc >=0)){
				if(grid1[row+dr][col+dc] ==1){
					nb[row][col] +=1 ;
					

				}
			};
		}
	}

};// check amount neighbours


function check(grid1,nb1){
	for(let i2 = 0;i2<grid1.length;i2++){
		for(let i3 =0;i3<grid1[0].length;i3++){
			dfs(grid1,nb1,i2,i3);
		}
	}
}
// update nb table 





function cel(x,y){
	ctx.clearRect(x,y,cell,cell);
	ctx.fillStyle = "rgb(250 250 0)";
	ctx.fillRect(x, y,cell ,cell );
	
}
function cel1(x,y){
	
	ctx.fillStyle = "rgb(255 0 0)";
	ctx.fillRect(x, y,cell ,cell );
}
// draw one cell




function grid(n,n1,sid){
	for(let i =1;i<n;i++){
		for(let i1 =1;i1<n1;i1++){
			if (sid[i][i1] == 1){
				cel(i*cell,i1*cell);
			}
			else{
				cel1(i*cell,i1*cell);
			}
			
	};};
};
// render grid on canvas

function behaivor(glist,nb,x,y){
	
	for(let k = 0; k<x; k++){
		for(let k2 = 0;k2 < y; k2++){
			
		
	
		
			if ((glist[k][k2] == 1) && (nb[k][k2] <2)){
				glist[k][k2] = 0}
			
				else if((glist[k][k2] == 1) && (nb[k][k2]==2)) {
				glist[k][k2] = 1}
				

			else if ((glist[k][k2] == 1) && (nb[k][k2] >3)) {
				glist[k][k2] = 0
			
				

			}else if ((glist[k][k2]) == 0 && (nb[k][k2] ==3)) {
				glist[k][k2] = 1
			}
		};
	};

}; // rules of game of life






let sid = board(x,y);
let nb = board1(x,y)


function mainloop(){
	check(sid,nb); //update amount of neighbours for each cell
	behaivor(sid,nb,x,y); // update sid table
	grid(x,y,sid);  // render cells on screen
	nb = board1(x,y);  // reset nb table
	
}
	
setInterval(mainloop,100);



