console.log('Welcome to Tic tac Toe')
let music = new Audio('challenge accepted.mp3')
let audioTurn = new Audio('turn.mp3')
let gameover = new Audio ('gameover.mp3')
let turn = "X"
// let boxtext= document.getElementsByClassName('boxtext')
let isgameover = false;

// Function to change the turn 
const changeTurn = ()=>{
    return turn ==="X"? "0" :"X" // turnly operator
}

// Function to check for a win 
const checkWin =()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25 ,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]

    wins.forEach(e=>{
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText !=="")){
            document.querySelector('.Info').innerText=boxtext[e[0]].innerText+"Won";
            isgameover= true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="300px"
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
    
}

// Main (game) Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText = turn;
            turn =  changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("Info")[0].innerText = "Turn for" + turn;
            }
        }
    })
})

//Reset the game
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn = "X";
    isgameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("Info")[0].innerText="Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})



// console.log('Welcome to Tic tac Toe')
// let music = new Audio('music/turn.mp3')
// let audioTurn = new Audio('music/turn.mp3')
// let gameover = new Audio ('music/gameover.mp3')
// let turn = "X"

// // Function to change the turn 
// const changeTurn = ()=>{
//     return turn ==="X"?"0":"X" // turnly operator
// }

// // Function to check for a win 
// const checkWin =()=>{
//     let boxtexts = document.getElementsByClassName("boxtext");
//     let wins = [
//         [0, 1, 2, 0, 3, 6],
//         [3, 4, 5, 0, 1, 2],
//         [6, 7, 8, 2, 5, 8],
//         [0, 3, 6, 0, 1, 2],
//         [1, 4, 7, 3, 4, 5],
//         [2, 5, 8, 6, 7, 8],
//         [0, 4, 8, 0, 4, 8],
//         [2, 4, 6, 2, 4, 6]
//     ];
//     wins.forEach(e=>{
//         if((boxtexts[e[0]].innerText===turn) && (boxtexts[e[1]].innerText===turn) && (boxtexts[e[2]].innerText===turn)){
//             document.querySelector('.info').innerText = turn+" Won";
//             gameover.play();
//             setTimeout(()=>{
//                 location.reload();
//             },3000);
//         }
//     })
// }

// // Main (game) Logic
// let boxes = document.getElementsByClassName("box");
// Array.from(boxes).forEach(element=>{
//     let boxtext = element.querySelector('.boxtext');
//     boxtext.addEventListener('click',()=>{
//         if(boxtext.innerText===''){
//             boxtext.innerText = turn;
//             turn =  changeTurn();
//             audioTurn.play();
//             checkWin();
//             document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
//         }
//     })
// })
