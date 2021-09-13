document.getElementById("button").addEventListener("click", plaatsafbeelding);

var total = 0;
function plaatsafbeelding(){

    var y = Math.floor(Math.random() * 50 + 1);
    var x = Math.floor(Math.random() * 80 + 1);

    //document.getElementById("Peter").style.top = y + "%";
    //document.getElementById("Peter").style.left = x + "%";

    let img = document.createElement("img");
    img.setAttribute('id', 'Peter');
    img.setAttribute('src', 'Peter_Griffin.png');
    img.style.position = 'absolute';
    img.style.top = y + "%";
    img.style.left = x + "%";
    document.body.appendChild(img);

    total = total + 1;

    document.getElementById("count").textContent = "Peter count: " + total;
}