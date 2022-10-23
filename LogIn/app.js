
function doLogIn() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');

    if(username.value == 'zeynep' && password.value== '1234') {
        console.log("you have logged in");
    } else if(username.value.length==0 || password.value.length==0) {
        console.log("Empty input(s)");
    } else {
        console.log("Wrong input(s)");
    }

}





