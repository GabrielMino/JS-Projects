//get clicks
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
//document.querySelector('.restart').addEventListener('click', handleRestartGame);
document.querySelector('.restart').addEventListener('click',handleRestartGame);
//get status
const statusDisplay = document.querySelector(".status");
//boolean that show if the game is still active
let gameActive = true;
let currentPlayer = "X";
let  board = ["","","","","","","","",""];

//Player turn
const currPlayerTurn = () => `It's ${currentPlayer}'s turn`;
// wins
const winningMessage = ()=> ` ${currentPlayer} won's the game`; 
//Game ended
const endMessage = () => `Game ended, please restart!`;

//Nested array!!!!
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];



    

        function handleCellClick(event) {
            //click event
            const clickedCell = event.target;
            //index
            const clickedCellIndex = clickedCell.dataset.index;
            //confirm is this cell is empty and the game is still active
            if((board[clickedCellIndex] !=="") || !gameActive){
            return;
            }

            handleCellPlayed(clickedCell,clickedCellIndex);
            //switchPlayers();
            handleResult();
        }

        function handleCellPlayed(cell,index){
            //fill the borad with X or O
            board[index] = currentPlayer;
            //fill the correspondent html cell
            cell.innerHTML = currentPlayer;

        }
        
        function handleResult(){
            let i = 0;
            let roundActive= true;
            let a; let b; let c; 
            while(i<winningConditions.length && roundActive ){
                //winCondition = winningConditions[i]
                a = board[winningConditions[i][0]];
                b = board[winningConditions[i][1]];
                c = board[winningConditions[i][2]];
                if ((a===""|| b===""||c==="")){
                    i++;}
                else{ 
                    if(a === b && a === c){
                        roundActive=false;
                    }else{i++;}  
                }
            }
             // if the game has a winner
            if (!roundActive) {
                statusDisplay.innerHTML = winningMessage();
                gameActive = false;
                return;
            }

            // if the game is tied and the is no avaible move
            let roundFinish = board.includes("");
            if(!roundFinish){
                statusDisplay.innerHTML= endMessage();
                gameActive=false;
                return;}
            
            switchPlayers();

            }

        /*

        function handleResultVal(){
            let roundActive= true;
            let a; let b; let c;
            
            
                for (let i = 0;i<winningConditions.length;i++){
                    let notBlanks = true;
                    do{
                        a = board[winningConditions[i][0]];
                        b = board[winningConditions[i][1]];
                        c = board[winningConditions[i][2]];
                        //exit the for loop
                        if (a===""|| b===""||c===""){notBlanks=false;}
                   
                    //validate
                    if(a===b && a===c);{
                        roundActive=false;
                        break;}
                                } while(notBlanks);
                }
        
            // if the game has a winner
            if (roundActive=false) {
                statusDisplay.innerHTML = winningMessage();
                gameActive = false;
                return;
            }

            // if the game is tied and the is no avaible move
            let roundFinish = board.includes("");
            if(!roundFinish){
                statusDisplay.innerHTML= drawMessage();
                return;}
            
            switchPlayers();

        }
        */
        function switchPlayers(){
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                statusDisplay.innerHTML = currPlayerTurn();
        }

        function handleRestartGame() {
            gameActive = true;
            currentPlayer = "X";
            board = ["", "", "", "", "", "", "", "", ""];
            statusDisplay.innerHTML = currPlayerTurn();
            document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
        }
        

        //https://www.codeleaks.io/tic-tac-toe-game-using-html-css-and-javascript/
        //https://www.youtube.com/watch?v=fPew9OI2PnA