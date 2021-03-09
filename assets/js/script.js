function setPerson(){
    var person = { 'name': getElementById('name'), 'photo': getElementById('photo')};
    
    // Put the object into the storage
        alert(person);
        localStorage.setItem('person', JSON.stringify(person));
    };