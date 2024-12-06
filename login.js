document.getElementById("login").addEventListener("click", logIn);
function logIn() {
    var email = document.getElementById("email").value;
    var pos = document.getElementById("pos").value;
         //alert(email);

    // var arr1 = [];
    // arr1.push({ email2: email, pos2: pos });
    // localStorage.setItem("myArray1", JSON.stringify(arr1));

    // var obj1 = JSON.parse(localStorage.getItem("myArray1"));
    // var valuLemail = console.log(obj1[0].email2);
    // var valuLpos = console.log(obj1[0].pos2);


    var obj = JSON.parse(localStorage.getItem(email));
    var valuSemail = obj[0].email1;
    var valuSpos = obj[0].pos1;
    //  alert(obj[0].name1);

    
    if (email === valuSemail && pos === valuSpos) {
        // sessionStorage.setItem('validate', true);
        localStorage.setItem('validate', true);

        localStorage.setItem('profile',obj[0].name1)
        window.open('index.html');
        // window.location.assign("https://www.w3schools.com")
    } else {
        alert('Please enter correct email id or password!');
    }

}