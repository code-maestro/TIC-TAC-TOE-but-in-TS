// import * as functions from 'firebase-functions';

// // https://firebase.google.com/docs/functions/typescript

// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
//   console.log('Hello world');
//   alert("Hello world from Firebase ! ");
// });

/**
 * 
 *  GLOBAL VARIABLES STORING GAME BOARD 
 * 
 */

let boxes: any[] = [null, null, null, null, null, null, null, null, null];

const O_TEXT: string = "O";
const X_TEXT: string = "X";
let currentPlayerText: string = O_TEXT;


/**
 * 
 *  FUNCTIONS
 * 
 */ 

const squares = Array.from(document.getElementsByClassName('square'));
console.log(squares);

const checkClickedSquare = () => {
  squares.forEach((square, index) => {
    if(index === 1){
      //square.addEventListener('click', squareClicked)

    }

    square.addEventListener('click', squareClicked)

  });
}

const squareClicked = (e: any) => {
  console.log('clicked on square');
  //alert("clicked on second square");

  const square_id: number = e.target.id;
  console.log(square_id);

  if (!boxes[square_id]) {
    boxes[square_id] = currentPlayerText;
    e.target.innerText = currentPlayerText;

    if (currentPlayerText === O_TEXT) {
      currentPlayerText = X_TEXT;
    }else{
      currentPlayerText = O_TEXT;
    }

    if (bestPlayer()) {
      alert(`${currentPlayerText} HAS WON `);
      return;
    }
  }
}

/**
 *  FUNCTION TO 
 */ 
const bestPlayer: any = () => {
  if (boxes[0] === currentPlayerText) {
    
    if (boxes[1] === currentPlayerText && boxes[2] === currentPlayerText) {
      alert(`${currentPlayerText} HAS WON TOP`);
    }

    if (boxes[4] === currentPlayerText && boxes[8] === currentPlayerText) {
      alert(`${currentPlayerText} HAS WON DIAGONALLY`);
    }
    
    if (boxes[3] === currentPlayerText && boxes[6] === currentPlayerText) {
      alert(`${currentPlayerText} HAS WON VERTICALLY LEFT`);
    } 
  }

  if (boxes[3] === currentPlayerText) {
    if (boxes[4] === currentPlayerText && boxes[5] === currentPlayerText) {
      alert(`${currentPlayerText} HAS WON MIDDLE HORIZONTALLY`);
    }
  }

  if (boxes[1] === currentPlayerText) {
    if (boxes[4] === currentPlayerText && boxes[7] === currentPlayerText) {
      alert(`${currentPlayerText} HAS WON MIDDLE VERTICALLY`);
    }
  }

  if (boxes[2] === currentPlayerText) {
    if (boxes[5] === currentPlayerText && boxes[8] === currentPlayerText) {
      alert(`${currentPlayerText} HAS WON VERTICALL RIGHT`);
    }
  }

}

checkClickedSquare();