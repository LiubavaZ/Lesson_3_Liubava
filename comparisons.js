//Lesson_3
//Task_1
console.log(Array.from('Hello World'));

let array1 = [1, 2, 3, 4];
console.log(array1.fill(0, 2, 4)); // fill with 0 from position 2 until position 4
console.log(array1.fill(5, 1)); // fill with 5 from position 1
console.log(array1.fill(6)); //fill all 6



//Task_2
let fruits =['Apple', 'Orange'];
console.log (fruits); //showing array's elements

fruits.push('Banana'); //adding new el to the end
console.log (fruits);

fruits [1]='Mango';
console.log (fruits); //adding new el inside

console.log (fruits.shift(0)); //delete and show 1st el
console.log (fruits);

fruits.unshift('Pear', 'Melon'); //adding start el
console.log (fruits);

//Task_3
let CompArr=['o', 'f','a', 'n', 'g'];
CompArr[1]='r';
CompArr.push('e');
console.log (CompArr.join(''));

//Lesson_4
let user={};
user.name='Alex';
user.lastname='Shevchenko';
user.name='Anna';
let userLastName=user.lastname;
console.log (user,userLastName);

//let a=1;
//let b=a;
//console.log(a,b);
//a=2;
