const input = document.getElementsByName('input')
const output = document.getElementById("item-name");
const save = document.getElementById("save");

function setData() {
    dataToStore = document.getElementById('item-name').value;
    return dataToStore;
}

let myArray =[]
let items = JSON.parse(localStorage.getItem('input'));
if (items) {
    myArray = items;
    console.log(myArray)
}
function storeData(event) {
    event.preventDefault()
    localStorage.setItem('input', setData());
    
    myArray.push(document.getElementById('item-name').value);
    localStorage.setItem('input', JSON.stringify(myArray));
    save.addEventListener('click', storeData, false);
}

<<<<<<< HEAD
function setData(newData){
    localStorage.setItem("data", JSON.stringify(newData))
 data = newData
}
console.log(data)
function displayData(){
    $("#item-1")
    .text(data.items[0].name)
=======
save.addEventListener('click', storeData, false);

console.log(myArray)

let counter = 0; 
var myObject ={}
for (let obj of myArray){ 
   counter++
   console.log(obj, counter)
   if(myObject[obj]){
    myObject[obj]=myObject[obj]+1
   }
   else{
    myObject[obj]=1
   }

>>>>>>> f97ed840d9bec39c53a5b41feed80462f7fd127c
}
console.log(myObject)



function minMax(){

let arr=[];

<<<<<<< HEAD
for ( var i = 0; i < arr.length()-1; i++){
    if (i==0){
        min = arr[i]
        max = arr[i]
    } else {
        if (arr[i] < min)
            min = arr[i];
            document.getElementById("min").innerHTML=("min" + "" + items.name);
        if (arr[i] > max)
            max = arr[i];
            document.getElementById("max").innerHTML=("max" + "" + items.name);
    }
    sum = sum + arr[i];
    document.getElementById("sum").innerHTML=("sum" + "" + items.name)
} 
console.log (minMax);
=======
// var min;
// var max;
// var sum = 0;
>>>>>>> f97ed840d9bec39c53a5b41feed80462f7fd127c


<<<<<<< HEAD
function MostItems() {
    document.getElementById("MostResults").innerHTML = "1 Billion Candies Congrats";
    
  }
  function MostNeeded() {
    
    document.getElementById("MostNeededResults").innerHTML = "We Need Toothbrushes";
  }
}
=======
// for ( var i = 0; i < arr.length()-1; i++){
//     if (i==0){
//         min = arr[i]
//         max = arr[i]
//     } else {
//         if (arr[i] < min)
//             min = arr[i];
//             document.getElementById("min").innerHTML=("min" + "" + items.name);
//         if (arr[i] > max)
//             max = arr[i];
//             document.getElementById("max").innerHTML=("max" + "" + items.name);
//     }
//     sum = sum + arr[i];
//     document.getElementById("sum").innerHTML=("sum" + "" + items.name)
// } 

// displayData()

>>>>>>> f97ed840d9bec39c53a5b41feed80462f7fd127c
