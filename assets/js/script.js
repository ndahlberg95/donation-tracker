const input = document.getElementsByName('input')
const output = document.getElementById("item-name");
const save = document.getElementById("save");

function setData() {
    dataToStore = document.getElementById('item-name').value;
    return dataToStore;
};

let myArray =[]
let items = JSON.parse(localStorage.getItem('input'));
if (items) {
    myArray = items;
    console.log(myArray)
};

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

}
console.log(myObject)

function findMinMaxSum(myArray) {
for ( let i = 0; i < myArray.length()-1; i++) ; {
    if (i==0){
        min = myArray[i]
        max = myArray[i]
    } else {
        if (myArray[i] < min)
            min = myArray[i];
            document.getElementById("min").innerHTML=("min" + "" + input);
        if (myArray[i] > max)
            max = myArray[i];
            document.getElementById("max").innerHTML=("max" + "" + input);
    }
    sum = sum + myArray[i];
    document.getElementById("sum").innerHTML=("sum" + "" + input)
} 

displayData()
}

console.log(min, max, sum)
