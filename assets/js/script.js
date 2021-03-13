const input = document.getElementsByName('input')
const output = document.getElementById("item-name");
const save = document.getElementById("save");
let sum = 0;
let min;
let max;

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

    myArray = JSON.parse(localStorage.getItem('input')) || [];
    console.log("myArray: "+ myArray);
    let itemName = document.getElementById('item-name').value;
    console.log("Item name: "+ itemName);
    myArray.push(document.getElementById('item-name').value);
    document.getElementById('item-name').value = "";
    localStorage.setItem('input', JSON.stringify(myArray));

    //findMinMaxSum(myArray)
    //save.addEventListener('click', storeData, false);
}

save.addEventListener('click', storeData, false);

let counter = 0; 
let myObject ={}
for (let obj of myArray){ 
   counter++
   console.log(obj, counter)
   if(myObject[obj]){
    myObject[obj]=myObject[obj]+1
   }
   else{
    myObject[obj]=1
   }

//    findMinMaxSum(myObject)
}
console.log(myObject)

function findMinMaxSum(myArray){
    Math.max (...myArray);
    document.getElementById("max").innerHTML=(max);
    Math.min (...myArray);
    document.getElementById("min").innerHTML=(min);
    Math.sum (...myArray);
    document.getElementById("sum").innerHTML=(sum);
}

console.log(myArray)