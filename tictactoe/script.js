// row column

let players = ["x","o","x","o","x","o","x","o","x",] //in total theres 9 tries
let playerid = 0
let player = players[playerid]
document.getElementById("playerstatus").textContent = "player : x"  //tells whos turn is it

//gameboard
let gameboard = [
    [" "," "," "],
    [" "," "," "],
    [" "," "," "],
]

function clicked(row, col, cellid){
    document.getElementById(cellid).textContent =  player   //display x / o on where they clicked
    gameboard[row][col] = player //update gameboard
    for(i = 0; i < 3; i++){  //check winner
        if(gameboard[i][0]==player && gameboard[i][1]== player && gameboard[i][2]==player){
            document.getElementById("end").textContent = "winner :" + gameboard[i][0] ;
            playerid = 9 // no more tries as game ended
        }
        if(gameboard[0][i]==player && gameboard[1][i]== player && gameboard[2][i]==player){
            document.getElementById("end").textContent = "winner :" + gameboard[0][i] ;
            playerid = 9 //no more tries as game ended 
        }
        if(gameboard[0][0]==player && gameboard[1][1]== player && gameboard[2][2]==player){
            document.getElementById("end").textContent = "winner :" + gameboard[0][0] ;
            playerid = 9 //no more tries as game ended 
        }
        if(gameboard[0][2]==player && gameboard[1][1]== player && gameboard[2][0]==player){
            document.getElementById("end").textContent = "winner :" + gameboard[0][2] ;
            playerid = 9 //no more tries as game ended 
        }
    }
    playerid = playerid + 1
    player = players[playerid]  
    document.getElementById("playerstatus").textContent = "player :" + player  //move on to next player
    //if theres a winner, playerid skip to 10. (9+1)


    // if 9 tries run out, and theres no winner its a tie
    if(playerid === 9){
        document.getElementById("end").textContent = "winner : tie" ;
    }
    }

