
let fondito = document.getElementById("inicio");
let imagen1 = document.getElementById("img1");
let btn1 = document.getElementById("boton1");
let btn2 = document.getElementById("boton2");

let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");

let btn3 = document.getElementById("boton3");
let btn4 = document.getElementById("boton4");

let lbl = document.getElementById("lbl");

let opc1 = document.getElementById("opcion1");
let opc2 = document.getElementById("opcion2");
let opc3 = document.getElementById("opcion3");

var numero = 0; 
   function cambiarCL()
   {
   	console.log("Esta cambiando de color la letra");

      if(numero==0){
         lbl.style.color="#FF0000";
         lbl.style.fontSize = "50px";
         numero = 1;
      }else if(numero==1){
         lbl.style.color="#800080";
         lbl.style.fontSize = "25px";
         numero = 2;
      }else if(numero==2){
         lbl.style.color="#FF0000";
         lbl.style.fontSize = "50px";
         numero = 3;
      }else if(numero==3){
         lbl.style.color="#800080";
         lbl.style.fontSize = "25px";
         numero = 0;
      }

   }
   setInterval("cambiarCL()",2000);

   function opciones()
   {
   	opc1.style.display = "block";
   	opc1.style.right = "100px";
   	opc2.style.display = "block";
   	opc3.style.display = "block";
   	btn3.style.display = "block";
   }
   btn1.addEventListener("click", opciones);

   function peq(){
   	uno.style.fontSize = "10px";
    dos.style.fontSize = "10px";
    tres.style.fontSize = "10px";
    cuatro.style.fontSize = "10px";
    cinco.style.fontSize = "10px";
    seis.style.fontSize = "10px";
    siete.style.fontSize = "10px";
   }
   opc1.addEventListener("click", peq);

   function normal(){
   	uno.style.fontSize = "15px";
    dos.style.fontSize = "15px";
    tres.style.fontSize = "15px";
    cuatro.style.fontSize = "15px";
    cinco.style.fontSize = "15px";
    seis.style.fontSize = "15px";
    siete.style.fontSize = "15px";
   }
   opc2.addEventListener("click", normal);

   function grande(){
   	uno.style.fontSize = "25px";
    dos.style.fontSize = "25px";
    tres.style.fontSize = "25px";
    cuatro.style.fontSize = "25px";
    cinco.style.fontSize = "25px";
    seis.style.fontSize = "25px";
    siete.style.fontSize = "25px";
   }
   opc3.addEventListener("click", grande);

   function ocultar(){
   	opc1.style.display = "none";
   	opc2.style.display = "none";
   	opc3.style.display = "none";
   	btn3.style.display = "none";
   }
   btn3.addEventListener("click", ocultar);

   var numero1 = 0; 
   function cambiarCF()
   {
   	console.log("Esta cambiando de color el fondo");

      if(numero1==0){
         fondito.style.backgroundColor="#2F4F4F";
         fondito.style.color="#FFFFFF";
         numero1 = 1;
      }else if(numero1==1){
         fondito.style.backgroundColor="#708090";
         fondito.style.color="#FFFFFF";
         numero1 = 2;
      }else if(numero1==2){
         fondito.style.backgroundColor="#8B4513";
         fondito.style.color="#FFFFFF";
         numero1 = 3;
      }else if(numero1==3){
         fondito.style.backgroundColor="#FF00FF";
         fondito.style.color="#FFFFFF";
         numero1 = 0;
      }

   }
   setInterval("cambiarCF()",2000);


   var numero2 = 0; 
   function cambiarT()
   {
   	console.log("Cambio de tamano");

      if(numero2==0){
         imagen1.style.width="300px";
         numero2 = 1;
      }else if(numero2==1){
         imagen1.style.width="500px";
         numero2 = 2;
      }else if(numero2==2){
         imagen1.style.width="700px";
         numero2 = 0;
      }
   }
   imagen1.addEventListener("click", cambiarT);


   function volverL()
   {
   	uno.style.display = "block";
    dos.style.display = "none";
    tres.style.display = "none";
    cuatro.style.display = "none";
    cinco.style.display = "none";
    seis.style.display = "none";
    siete.style.display = "none";
   }
   btn2.addEventListener("click", volverL);


   var opcion = 0; 
   function cambiarP()
   {

      if(opcion==0){
         uno.style.display = "none";
         dos.style.display = "block";
         tres.style.display = "none";
         cuatro.style.display = "none";
         cinco.style.display = "none";
         seis.style.display = "none";
         siete.style.display = "none";
         btn4.addEventListener("click", cambiarP);
         opcion = 1;
      }else if(opcion==1){
         uno.style.display = "none";
         dos.style.display = "none";
         tres.style.display = "block";
         cuatro.style.display = "none";
         cinco.style.display = "none";
         seis.style.display = "none";
         siete.style.display = "none";
         btn4.addEventListener("click", cambiarP);
         opcion = 2;
      }else if(opcion==2){
         uno.style.display = "none";
         dos.style.display = "none";
         tres.style.display = "none";
         cuatro.style.display = "block";
         cinco.style.display = "none";
         seis.style.display = "none";
         siete.style.display = "none";
         btn4.addEventListener("click", cambiarP);
         opcion = 3;
      }else if(opcion==3){
         uno.style.display = "none";
         dos.style.display = "none";
         tres.style.display = "none";
         cuatro.style.display = "none";
         cinco.style.display = "block";
         seis.style.display = "none";
         siete.style.display = "none";
         btn4.addEventListener("click", cambiarP);
         opcion = 4;
      }else if(opcion==4){
         uno.style.display = "none";
         dos.style.display = "none";
         tres.style.display = "none";
         cuatro.style.display = "none";
         cinco.style.display = "none";
         seis.style.display = "block";
         siete.style.display = "none";
         btn4.addEventListener("click", cambiarP);
         opcion = 5;
      }else if(opcion==5){
         uno.style.display = "none";
         dos.style.display = "none";
         tres.style.display = "none";
         cuatro.style.display = "none";
         cinco.style.display = "none";
         seis.style.display = "none";
         siete.style.display = "block";
         btn4.addEventListener("click", cambiarP);
      }
   }
   btn4.addEventListener("click", cambiarP);
