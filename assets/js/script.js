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

displayData()
