document.getElementById("signup").addEventListener("click",signUp);
function signUp(){
    var name = document.getElementById("name").value;
    var user = document.getElementById("user").value;
    var email = document.getElementById("inputEmail4").value;
    var pos = document.getElementById("inputPassword4").value;
    var addr = document.getElementById("inputAddress").value;
    var addr2 = document.getElementById("inputAddress2").value;
    var city = document.getElementById("inputCity").value;
    var ups = document.getElementById("up").value;
    var gus = document.getElementById("gu").value;
    var pho = document.getElementById("phone").value;
   
    var arr = [];
    arr.push({name1:name,user1:user,email1:email,pos1:pos,addr1:addr,addr21:addr2,city1:city,ups1:ups,gus1:gus,pho1:pho});
    // using email id as key becauseit is unique for every user and it will handle override problem in localstorage
    localStorage.setItem(email,JSON.stringify(arr));
}