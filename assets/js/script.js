const input = document.getElementsByName('input')
for (var i = 0; i < input.length; i++) {
    var a = input[i];
    k = k + "item-name[" + i + "].value="
        + a.value + " ";

    items: []
};
const output = document.getElementById("item-name");
const save = document.getElementById("save");

// let data = getData()

// function getData() {

//     //need to make dynamic based on input
//     save.addEventListener("click", setData);


//     output.textContent = localStorage.getItem("input")
//     input.value = localStorage.getItem("input");

//     return JSON.parse(localStorage.getItem("data"));
// }

function setData() {
    dataToStore = document.getElementById('item-name').value;
    return dataToStore;
}

let myArray =[]
function storeData(event) {
    event.preventDefault()
    localStorage.setItem('input', setData());
    
    myArray.push(JSON.parse(localStorage.getItem("myArray")));
    localStorage.setItem('input', JSON.stringify(a));
    save.addEventListener('click', storeData, false);
}

save.addEventListener('click', storeData, false);


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

