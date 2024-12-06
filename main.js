// let validate = sessionStorage.getItem("validate");
let validate = localStorage.getItem("validate");

if (validate) {
    document.getElementById("login_hide").style.display = "none";
}

else {
    document.getElementById("logout_display").style.display = "none";
}
function logout() {
    localStorage.removeItem("validate");
    window.location.href = "index.html";
}

// for item display dynamic
let contid = document.getElementById("dv");

let obarr = [{
    id: 1,
    bool: true,
    src: "image/image1.jpg",
    title: "levis belt",
    type: "Type: belt",
    price: "price: 300rs.",
},

{
    id: 2,
    bool: true,
    src: "image/image2.jfif",
    title: "DC Usa",
    type: "Type: shoes",
    price: "price: 1300rs.",
},

{
    id: 3,
    src: "image/image3.jfif",
    title: " DC Usa",
    type: "Type: shoes",
    price: "price: 1800rs.",
},

{
    id: 4,
    src: "image/image4.jfif",
    title: "Wildcraft belt",
    type: "Type: belt",
    price: "price: 400rs.",
},

{
    id: 5,
    src: "image/image5.jfif",
    title: " Sport Dc usa",
    type: "Type: shoes",
    price: "price: 1500rs.",
},

{
    id: 6,
    src: "image/image6.jpg",
    title: "Casual Dc usa",
    type: "Type: shoes",
    price: "price: 900rs.",
},

{
    id: 7,
    src: "image/image7.jpg",
    title: "DNMX",
    type: "Type: Jeans",
    price: "price: 700rs.",
},

{
    id: 8,
    src: "image/image8.jfif",
    title: "Levis",
    type: "Type: Jeans",
    price: "price: 1100rs.",
},
];

for (var i = 0; i<8; i++) {
    let tre = document.createElement("div");
    tre.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${obarr[i].src}" alt="image is not loaded"/>
    <div class="card-body">
      <h5 class="card-title">${obarr[i].title}</h5>
      <h5 class="card-title">${obarr[i].type}</h5>
      <h5 class="card-title">${obarr[i].price}</h5>
      
        <button type="button" class="btn add btn-primary" onclick="cart(${i})">add to cart</button>
    </div>
    </div>`;
    contid.appendChild(tre);

}

// add to cart function
 
let arr = JSON.parse(localStorage.getItem("mycardArray")) ? JSON.parse(localStorage.getItem("mycardArray")) : [];
function cart(i){
    // if(obarr[i].bool)
    arr.push(obarr[i]);
    // obarr[i].bool=false;
    localStorage.setItem("mycardArray", JSON.stringify(arr));
}


// user profile name
// let userProfile = JSON.parse(localStorage.getItem(email));
let pro = localStorage.getItem("profile");
//   for profile display dynamic
let parentdiv = document.getElementById("prdiv");

let cret = document.createElement("div");
cret.innerHTML = `<button type="button" class="btn btn-primary position-relative">
Hi ${pro}
<span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">

</span>
</button>`;
parentdiv.appendChild(cret);