function setPerson(){
    var person = { 'name': getElementById('name'), 'photo': getElementById('photo')};
    
    // Put the object into the storage
        alert(person);
        localStorage.setItem('person', JSON.stringify(person));
    };
console.log ("Hello World!")
var data = getData()

function getData(){
    // var x =
    // {
    //     items : [
    //         {name: "toilet paper", amount: 2 },
    //         {name: "tissues", amount: 8 },
    //     ]
    // }
    // return x
    return JSON.parse (localStorage.getItem("data"))
}

function setData(newData){
    localStorage.setItem("data", JSON.stringify(newData))
 data = newData
}

function displayData(){
    $("#item-1")
    .text(data.items[0].name)
}

//<<<<<<< stats
var min;
var max;
var sum = 0;

for ( var i = 0; i < arr.length()-1; i++){
    if (i==0){
        min = arr[i]
        max = arr[i]
    } else {
        if (arr[i] < min)
            min = arr[i];
        if (arr[i] > max)
            max = arr[i];
    }
    sum = sum + arr[i];
} 

displayData()
//=======
//displayData()
//>>>>>>> main

function increaseDonation()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    window.localStorage.setItem('Click to Add to the Number of Donations', 'number');
    // localStorage.setItem ("number")
    // console.log(increaseDonation);
    console.log(value);
    
}
function MostItems() {
    document.getElementById("MostResults").innerHTML = "1 Billion Candies Congrats";
    
  }
  function MostNeeded() {
    
    document.getElementById("MostNeededResults").innerHTML = "We Need Toothbrushes";
  }
