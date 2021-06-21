// a function that takes 2 arguments 
// firstName and lastName and displays a greet
function welcome(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }
    displayFullName();
}
