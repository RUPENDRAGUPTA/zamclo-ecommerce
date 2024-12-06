let obj = JSON.parse(localStorage.getItem("mycardArray"));

let contid = document.getElementById("dv");



for (var i = 0; i < obj.length; i++) {


  let tre = document.createElement("div");
  tre.innerHTML = `<div class="card" style="width: 18rem;">
      <img src="${obj[i].src}" alt="image is not loaded"/>
      <div class="card-body">
        <h5 class="card-title">${obj[i].title}</h5>
        <h5 class="card-title">${obj[i].type}</h5>
        <h5 class="card-title">${obj[i].price}</h5>
        
          <button type="button" class="btn  rmv btn-primary" onclick="remove(${i})">remove</button>
      </div>
      </div>`;
  contid.appendChild(tre);

}
function remove(i) {
  obj.splice(i, 1);
  localStorage.setItem("mycardArray", JSON.stringify(obj))
  location.reload();
}