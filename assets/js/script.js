function setPerson(){
    var person = { 'name': getElementById('name'), 'photo': getElementById('photo')};
    
    // Put the object into the storage
        alert(person);
        localStorage.setItem('person', JSON.stringify(person));
    };

console.log ("Hello World!")

var data = getData()

function getData(){

    //need to make dynamic based on input
    var input = document.getElementsByName('Item-name')
    for (var i = 0; i<input.length; i++)
    {
        var a = input [i];
        k=k +"item-name[" +i +"].value="
                           + a.value + " ";

        // items : [
        //     {name: "toilet paper", amount: 2 },
        //     {name: "tissues", amount: 8 },
        // ]
    }
    return input

    return JSON.parse (localStorage.getItem("data"))
}

function setData(newData){
    localStorage.setItem("data", JSON.stringify(newData))
 data = newData
}
console.log(data)
function displayData(){
    $("#item-1")
    .text(data.items[0].name)
}


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
            document.getElementById("min").innerHTML=("min" + "" + items.name);
        if (arr[i] > max)
            max = arr[i];
            document.getElementById("max").innerHTML=("max" + "" + items.name);
    }
    sum = sum + arr[i];
    document.getElementById("sum").innerHTML=("sum" + "" + items.name)
} 

displayData()

