//1
// const askConfirm = () => confirm("Натисніть OK, щоб продовжити");

// const checkConfirm = () => {
//   let result = askConfirm(); 

//   while (!result) { 
//     result = askConfirm();
//   }

// alert("Hello world")
// };
// checkConfirm(); 

//2
// const targetNumber = Math.floor(Math.random() * 100) + 1; 

// const guessNumber = () => {
//   const guess = Number(prompt("Запишіть число від 1 до 100 і вгадайте моє:")); 
//   if (guess === targetNumber) {
//     alert("ВИ ВИГРАЛИ. ЧИСЛО: " + targetNumber);
//   } else {
//     alert(guess > targetNumber ? "Забагато!" : "Замало!");
//     guessNumber(); 
//   }
// };

// guessNumber(); 

//3
// let okClicks = 0; 

// const askConfirm = (a) => {
//   const result = confirm("Натисніть OK, щоб продовжити, або Скасувати, щоб завершити.");
//   a(result); 
// };


//4
// const applyCallbackToEachElement = (arr, callback) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//       result.push(callback(arr[i])); 
//     }
//     return result;
//   };
  
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const squareCallback = (num) => num * num; 
//   const result = applyCallbackToEachElement(arr, squareCallback);
//   console.log(result); // [1, 4, 9, 16, 25...]

  //5
//   const calculateDiscoutedPrice = (price, discount, callback) => {
//     const discountedPrice = price - (price * (discount / 100)); 
//     callback(discountedPrice); 
//   };

//   const showDiscountedPrice = (price) => {
//     console.log(`Дисконтна ціна: ${price}`); 
//   };
//   calculateDiscoutedPrice(1200, 12, showDiscountedPrice)