
// question 1
const user = {
    fName : "Tanushi",
    lName : "Solanky",
    age : 21,
    gender : "female",
    hobbies : ['chess', 'cooking', 'sleeping']
}
console.log(user);


// question 2
const sampleObject = {
    a: 'test',
    b: 12,
    c: true
}
console.log(Object.keys(sampleObject));
console.log(Object.values(sampleObject));
console.log(sampleObject);


// question 3
function check(user1, propertyName){
    return user1.hasOwnProperty(propertyName);
}
const user1 ={
    name : "Tanushi",
    age : 21,
    gender : "female",
};
console.log(check(user1, 'name'));
console.log(check(user1, 'surname'));


// question 4
function empty(object){
    for (keys in object){
        return false;
    }
    return true;
} 
const object1 = {};
const object2 = {
    name : "Tanushi",
};
console.log(empty(object1));
console.log(empty(object2));


// question 5
//string to number
const string = "20";
const no = Number(string);
console.log(typeof string);
console.log(typeof no);

// number to string
const no1 = 20;
const string1 = "20";
console.log(typeof no1);
console.log(typeof string1);

// boolean to string
const boolean = true;
const string2 = "true";
console.log(typeof boolean);
console.log(typeof string2);
