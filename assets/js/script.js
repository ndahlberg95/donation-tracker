    const input = document.getElementById('input')
    const output = document.getElementById('')
    const save = document.getElementById("save")

let data = getData()

function getData(){

    //need to make dynamic based on input
    save.addEventListener("click", setData);

    output.textContent = localStorage.getItem("#text")
    input.value = localStorage.getItem("#text");

    return JSON.parse (localStorage.getItem("data"));
}

function setData() {
    dataToStore = document.getElementById('txtStore').value;
    return dataToStore;
}

function storeData() {
    localStorage.setItem('input', setData());
}

btnStore.addEventListener('click', storeData, false);

function addDonation()

for (var i = 0; i<input.length; i++)
{
  var a = input [i];
  k=k +"item-name[" +i +"].value="
   + a.value + " ";

items : []
}
return input


// var min;
// var max;
// var sum = 0;


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

