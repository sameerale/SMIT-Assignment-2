

//  Question 1

function addNum (num1){
  return function (num2){
    console.log(num1 + num2);
  }
}
let addFive = addNum(5);
let addSix = addNum(6);
addFive(6);
addSix(4);

//  Question 2

let arr =[1,2,3,4,5];
function searchArray (arr){
  if (arr.length === 0){
    return false; 
  } else {
    return true;
  } 
}

let num = searchArray(0);
console.log(num);

function searchArray(arr, val) {
  if (arr.length === 0) {
    return false;
  } else if (arr[0] === val) {
    return true;
  } else {
    return searchArray(arr.slice(1), val);
  }
}

console.log(searchArray(arr, 3)); // returns true
console.log(searchArray(arr, 9)); // returns false


//   Question 3


function addParagraphToDOM(text) {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = text;
  document.body.appendChild(newParagraph);
}
addParagraphToDOM("This is the new paragraph text.");

function showText() {
  const myTextElement = document.getElementById("myText");
  myTextElement.style.display = "block";
}


//   Question 4

let nextListItemNumber = 4; // Set initial value for next item number

function addNextListItem() {
  // Create a new list item element with the next item number
  const newListItem = document.createElement("li");
  const newItemText = document.createTextNode("Item " + nextListItemNumber);
  newListItem.appendChild(newItemText);

  // Find the existing list element and append the new list item to it
  const myListElement = document.getElementById("myList");
  myListElement.appendChild(newListItem);

  // Increment the next item number for the next time the function is called
  nextListItemNumber++;
}


function changeBgColor(elem, color) {
  elem.style.backgroundColor = color;
}

// Usage example
const myElement = document.querySelector("#my-div"); // Get reference to HTML element with id "my-div"
changeBgColor(myElement, "red");

// Question 5

let myPara = document.getElementById("my-para");
myPara.innerHTML ="<b>Pakistan Zindabad</b>";
setInterval(function (){
  let color1 =Math.round (Math.random() * 1000000);
   myPara.style.backgroundColor ="#" + color1;
   myPara.style.color ="#fff";
  },1000);

//  Question 6

function saveObjectToLocalStorage(key, object) {
  // Convert the object to a string
  const objectAsString = JSON.stringify(object);

  // Save the stringified object to local storage using the specified key
  localStorage.setItem(key, objectAsString);
}

const myObject = { name: "John", age: 30 };
saveObjectToLocalStorage("myObjectKey", myObject);


// //  Question 7

function getObjectFromLocalStorage(key) {
  // Get the stringified object from local storage using the specified key
  const objectAsString = localStorage.getItem(key);

  // Parse the stringified object back into a JavaScript object
  const object = JSON.parse(objectAsString);

  // Return the parsed object
  return object;
}

const myObj = getObjectFromLocalStorage("myObjectKey");
console.log(myObj); // Should output the object we saved earlier

// Question 8

function saveObjectToLocalStorage(obj) {
  for (let key in obj) {
    localStorage.setItem(key, JSON.stringify(obj[key]));
  }

  const newObj = {};

  for (let key in obj) {
    newObj[key] = obj[key];
  }

  return newObj;
};