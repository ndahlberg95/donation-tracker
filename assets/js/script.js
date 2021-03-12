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

// displayData()

