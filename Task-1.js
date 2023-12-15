// function task1(){

// var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

// function logDairy() {
//   for (const product of dairy) {
//     console.log(product);
//   }
// }

// logDairy();


// const animal = {
//   canJump: true
// };

// const bird = Object.create(animal);
// bird.canFly = true;
// bird.hasFeathers = true;

// function birdCan() {
//   for (const key in bird) {
//     if (bird.hasOwnProperty(key)) {
//       console.log(`${key}: ${bird[key]}`);
//     }
//   }
// }

// birdCan();


// function animalCan() {
// //   for (const key in bird) {

// //     console.log(`${key}: ${bird[key]}`);
// //     break;

// //   }
//   for (const key in animal) {
//     console.log(`${key}: ${animal[key]}`);
//   }
// }

// animalCan();

// }
// task1()



function click(a){
  console.log(a+"!");
}
click("adrian");
click(click("adian"));