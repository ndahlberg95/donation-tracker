const input = document.getElementsByName('input')
const output = document.getElementById("item-name");
const save = document.getElementById("save");
let myObject = {};


function setData() {
    dataToStore = document.getElementById('item-name').value;
    return dataToStore;
};

let myArray = JSON.parse(localStorage.getItem('input')) || [];
/*let items = JSON.parse(localStorage.getItem('input'));
if (items) {
    myArray = items;
    console.log(myArray)
};*/

function storeData(event) {
    event.preventDefault()
    //localStorage.setItem('input', setData());

    // myArray = JSON.parse(localStorage.getItem('input')) || [];
    console.log("myArray: " + myArray);
    let itemName = document.getElementById('item-name').value;
    console.log("Item name: " + itemName);
    myArray.push(document.getElementById('item-name').value);
    document.getElementById('item-name').value = "";
    localStorage.setItem('input', JSON.stringify(myArray));
    // defineMyObject();
    findMin();
    findSum();
    findMax();
}

save.addEventListener('click', storeData, false);

function defineMyObject(){
    let counter = 0;
    for (let obj of myArray) {
        counter++
        console.log(obj, counter)
        if (myObject[obj]) {
            myObject[obj] = myObject[obj] + 1
        }
        else {
            myObject[obj] = 1
        }
    }
}
defineMyObject()


// findMin identifies and displays the item with the least amount of donations
function findMin(){
    let min = Number.MAX_SAFE_INTEGER;
    console.log ("findMin is running")
    var minItem = "";
    for (const itemName in myObject) {
        console.log (myObject[itemName]);
        if (myObject[itemName] < min){
            min = myObject[itemName];
            minItem = itemName;
        }
    }
    console.log ("This is the min:", min)
    document.getElementById("min").innerHTML=minItem
}

// findSum adds and displays the totaly number of donations
function findSum(){
    let sum = 0;
    console.log ("findSum is running")
    console.log (myObject)
    for (const itemName in myObject) {
        console.log (myObject[itemName])
        sum = sum + myObject[itemName]
    }
    console.log (sum)
    document.getElementById("sum").innerHTML=sum
}

// findMin identifies and displays the item with the most amount of donations
function findMax(){
    let max = Number.MIN_SAFE_INTEGER;
    console.log ("findMax is running")
    var maxItem = "";
    for (const itemName in myObject) {
        console.log (myObject[itemName]);
        if (myObject[itemName] > max){
            max = myObject[itemName];
            maxItem = itemName;
        }
    }
    console.log ("This is the max:", max)
    document.getElementById("max").innerHTML=maxItem
}

findMin()
findSum()
findMax()


var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
      $("#currentDay").html(todayDate);
var currentDay = null,
      date = null;

var update = function () {
  date = moment(new Date())
  currentDay.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
  currentDay = $('#currentDay')
  update();
  setInterval(update, 1000);
});