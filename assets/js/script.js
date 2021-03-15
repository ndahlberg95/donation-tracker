const input = document.getElementsByName('input')
const output = document.getElementById("item-name");
const save = document.getElementById("save");


// Form Code
function validate() {
    myFunction()
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

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
    }
  }

