let btn = document.createElement("button");
btn.innerText = "Change color";
btn.style.backgroundColor = "#268697";
btn.style.color = "white";
btn.style.border = "0";
document.querySelector("body").append(btn);

function random(n) {
    // console.log((Math.floor(Math.random() * n+1)));
    return (Math.floor(Math.random() * n + 1));
}
function btna(n) {
    // console.log((Math.floor(Math.random() * n+1)));
    return (Math.floor(Math.random() * n + 1));
}

let colorChange = () => {
    let radmColor = `rgb(${random(255)} ${btna(255)} ${random(255)})`;
    let btnColor = `rgb(${random(255)} ${btna(255)} ${btna(255)})`;
    document.body.style.backgroundColor = radmColor;
    btn.style.backgroundColor = btnColor;
}

btn.addEventListener("click", colorChange);

let para = document.createElement("p");
para.innerText = "";
document.body.append(para);
document.body.addEventListener("mousedown",logkey);

function logkey(event) {
    para.innerText = `Screen X/Y ${event.screenX}, ${event.screenY} 
                        Client X/Y ${event.clientX}, ${event.clientY}`;
}