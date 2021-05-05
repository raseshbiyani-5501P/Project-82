var mouseEvent="empty";
var lastpositionofx,lastpositionofy;
canvas= document.getElementById("myCanvas");

ctx= canvas.getContext("2d");
var color = "blue";
var width = 5;
 

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
   color = document.getElementById("color_name").value;
   width = document.getElementById("width").value;
  radius = document.getElementById("rad").value;
    mouseEvent="mousedown";
}


canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
 c_Mouse_x=e.clientX-canvas.offsetLeft;
 c_Mouse_y=e.clientY-canvas.offsetTop;
 if(mouseEvent=="mousedown")
 {
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=width;
     ctx.arc(c_Mouse_x,c_Mouse_y,radius,0,Math.PI*2);
     ctx.stroke();
     
 }
 lastpositionofx=c_Mouse_x;
 lastpositionofy=c_Mouse_y;
}

function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}