// G.Fernando Treviño Estrada
// 01-13-2024
// Practica de modificacion del DOM

let contadorDeTarjetas=0;


//Referencias
let contenedor=document.getElementsByClassName('contenedor') ;
let actualCard=document.querySelector('.card');
let nombre=document.querySelector('.card h3');
let descripcion=document.querySelector(".card p");

let botonEdit=document.getElementById("boton-editar");
let botonAdd=document.getElementById("boton-add");



 //Eventos click
 
 botonEdit.addEventListener('click',editar);
 
 botonAdd.addEventListener('click',addNewCard);
 

 //------------Funciones--------------------------------------------
 function editar(){ //Editar nombre y descripcion de primer tarjeta
    nombre.textContent='Nombre editado';
    descripcion.textContent='Este es el nuevo contenido del componente';


 }


 function addNewCard(){//Agregar un maximo de 6 tarjetas

    if(contadorDeTarjetas>=6){
        alert('Maximo numero de tarjeas alcanzado');
        window.location.reload();//Recargar la pagina
    }
    else{
            //Agregar una nueva tarjeta
        let newCard=document.createElement('div');
        newCard.setAttribute('class','card');
        
        newCard.innerHTML=`<h3> New card ${contadorDeTarjetas+1}</h3> <p> New description</p>`;
        actualCard.after(newCard);
        actualCard=document.querySelectorAll('.card')[contadorDeTarjetas+1];
        contadorDeTarjetas++;

      }
    
   


 }

 
