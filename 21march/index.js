// switch case to display day

const day=4;
switch (day) {
    case 0:
        console.log("today is Sunday");
        break;
    case 1:
        console.log("today is Monday");
        break; 
    case 2:
        console.log("today is Tuesday");
        break;  
    case 3:
        console.log("today is Wednesday");
        break; 
    case 4:
        console.log("today is Thursday");
        break;
    case 5:
        console.log("today is Friday");
        break;   
    case 6:
        console.log("today is Saturday");
        break;
}


// question 1


// question 2

let num = 5;
let prime = isPrime(num);

function isPrime(num) {
    if (num < 2) {
      return console.log("not a prime no.");
    }
    if (num === 2) {
      return console.log(" prime no.");
    }
    if (num % 2 === 0) {
        return console.log("not a prime no.");
      }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return console.log("not a prime no.");
      }
    }
    return console.log(" prime no.");
  }


  // question 3

function type(arg) {
  return typeof arg;
}
  let string = "tanushi";
  let number = 42;
  let object = { 
      name: "tanushi", 
      age: 30,
      gender: "female" 
  };

  console.log(type(string));
  console.log(type(number)); 
  console.log(type(object)); 


  // question 4

const str= "tanushi solanky";
const strlength = str.length;
for (let i = strlength-1; i>=0; i--){
    console.log(str[i]);
}











