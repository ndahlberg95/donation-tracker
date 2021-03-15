const input = document.getElementsByName('input')
const output = document.getElementById("item-name");
const save = document.getElementById("save");
let myObject = {};


// Form Code
function validate() {
    myFunction()
    var itemName = document.getElementById ("itemName");
    var Value = document.getElementById ("Value");
}
function setData() {
    dataToStore = document.getElementById('item-name').value;
    return dataToStore;
}


function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
    }
} 
