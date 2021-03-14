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
    console.log("myArray: "+myArray);
    let itemName = document.getElementById('item-name').value;
    console.log("Item name: "+itemName);
    myArray.push(document.getElementById('item-name').value);
    document.getElementById('item-name').value = "";
    localStorage.setItem('input', JSON.stringify(myArray));

    //findMinMaxSum(myArray)
    //save.addEventListener('click', storeData, false);
}
console.log(myObject)



save.addEventListener('click', storeData, false);

//console.log(myArray)

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

// var min;
// var max;
// var sum = 0;


// Form Code
function validate() {
    var itemName = document.getElementById ("itemName");
    var Value = document.getElementById ("Value");

    if(itemName.value.trim() == "" ||Value.value.trim()=="")

    {
        alert("No Blank Values Allowed");
        return false;
    }
    else {
        true;

    }
}

displayData()

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
function maxObject(myArray){
    if (myArray.length ===0)
        return null;
    let myObject = {};
    let maxEl = myArray[0], maxCount = 1; 
    for (var i = 0; i < myArray.length; i++)
    {
        let el = myArray [i];
        if(myObject [el]===null)
            myObject [el] = 1;
            else
            myObject [el]++;
            if(myObject[el] > maxCount)
            {
                maxEl = el;
                maxCount = myObject [el];
            }

    }

    console.log(maxEl);

     
}

// function findMinMaxSum(myArray) {
//     console.log(myArray);
// for ( let i = 0; i < myObject.length; i++) {
//     if (i==0){
//         min = myObject[i]
//         max = myObject[i]
//     } else {
//         if (myObject[i] < min)
//             min = myObject[i];
//             document.getElementById("min").innerHTML=("min" + "" + input);
//         if (myObject[i] > max)
//             max = myObject[i];
//             document.getElementById("max").innerHTML=("max" + "" + input);
//     }
//     sum = sum + myObject[i];
//     document.getElementById("sum").innerHTML=("sum" + "" + input)
// } 

//displayData()
// }


