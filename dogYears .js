const myAge = 18; // a variable equal to my age.

let earlyYears = 2; // a variable equal to 2 (we will change it later).

earlyYears *= 10.5; // or i can write earlyYears = earlyYears *10;

let laterYears = myAge - 2; // we set a new value to laterYears.
// myAge -= 2; does it work ?

laterYears *= 4; // multiply the laterYears variable by 4 using multiplication assignment operator.

/*console.log(earlyYears);
console.log(laterYears);*/

let myAgeInDogYears = earlyYears + laterYears;

let myName = "Muhannad".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);