let boton1 = document.getElementById("btn1");
let boton2 = document.getElementById("btn2");
let boton3 = document.getElementById("btn3");
let boton4 = document.getElementById("btn4");

function cambiarColorFondo1(){
	boton1.style.backgroundColor = "#FFFFFF";
	boton2.style.backgroundColor = "#FF4500";
	boton3.style.backgroundColor = "#FF4500";
	boton4.style.backgroundColor = "#FF4500";

}
boton1.addEventListener("click", cambiarColorFondo1);

function cambiarColorFondo2(){
	boton1.style.backgroundColor = "#FF4500";
	boton2.style.backgroundColor = "#FFFFFF";
	boton3.style.backgroundColor = "#FF4500";
	boton4.style.backgroundColor = "#FF4500";
}
boton2.addEventListener("click", cambiarColorFondo2);

function cambiarColorFondo3(){
	boton1.style.backgroundColor = "#FF4500";
	boton2.style.backgroundColor = "#FF4500";
	boton3.style.backgroundColor = "#FFFFFF";
	boton4.style.backgroundColor = "#FF4500";
}
boton3.addEventListener("click", cambiarColorFondo3);

function cambiarColorFondo4(){
	boton1.style.backgroundColor = "#FF4500";
	boton2.style.backgroundColor = "#FF4500";
	boton3.style.backgroundColor = "#FF4500";
	boton4.style.backgroundColor = "#FFFFFF";
}
boton4.addEventListener("click", cambiarColorFondo4);
