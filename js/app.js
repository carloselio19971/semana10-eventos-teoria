// //Elemento que emitira
// let  documento=document;
// //Evento que va ejercutar                 //Funcion que va ejecutar
// documento.addEventListener('DOMContentLoaded',()=>{
//     console.log("Me ejecuto cuando cargo la pagina");
// });


//Eventos de Mouse
let boton=document.querySelector('#btn-click-mouse');
boton.addEventListener('click',()=>{
    boton.style.backgroundColor="red";
    boton.style.color="white";
});
boton.addEventListener('dblclick',()=>{
    boton.style.backgroundColor="white";
    boton.style.color="black";
});


let boton2=document.querySelector("#btn-click-mouse-2");
let creaBoton=document.createElement('button');
let elementocontenedor=document.querySelector("#contenedor-creador-js");

boton2.addEventListener('click',(e)=>{
    creaBoton.style.backgroundColor="red";
    creaBoton.style.color="black";
    creaBoton.style.width="120px";
    creaBoton.style.height="20px";
    creaBoton.style.border="1px solid blue";
    creaBoton.textContent="Me crearon js";
    elementocontenedor.appendChild(creaBoton);
    console.log(e);
});

let boton3=document.querySelector("#btn-click-mouse-3");
boton3.addEventListener('click',(e)=>{
    console.log(e.target)
});

//Opteniendo variable
//Eventos
//Blur
// inputnombre.addEventListener('blur',()=>{
//     console.log("Salir del input nombre");
// })



//Input
let inputnombre=document.querySelector("#inputnombre");
let inputapellido=document.querySelector("#inputapellido");
let nuevoelementocreadodelinputnombre=document.querySelector("#nuevo-elemento-creado-input-nombre");
let nuevoelementocreadodelinputapellido=document.querySelector("#nuevo-elemento-creado-input-apellido");

inputnombre.addEventListener('input',(e)=>{
    nuevoelementocreadodelinputnombre.textContent=e.target.value;
})
inputapellido.addEventListener('input',(e)=>{
    nuevoelementocreadodelinputapellido.textContent=e.target.value;
})


//Validar si el campo del elemento nombre esta vacio
// inputnombre.addEventListener('blur',(e)=>{
//     if(e.target.value===''){
//         alert('Campos faltantes');
//     }
//     else {
//         alert('Listo');
//     }
// });

//Evento submit

let contanierForm=document.querySelector("#formulario-submit");
contanierForm.addEventListener('submit',(e)=>{
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    e.preventDefault();
});

//Eventos de Tipo Scrool
window.addEventListener('scroll',(e)=>{
    console.log(e);
    console.log(window.scrollX);
    console.log(window.scrollY);
}); 
//Event bubbling
let elementocard=document.querySelector("#card");
let titulocard=document.querySelector("#titlecard");
let inforCard=document.querySelector("#info-card");
let descripcionCard=document.querySelector("#descripcion");



elementocard.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("Card Element");
});
titulocard.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("Titulo Element");
    
});
inforCard.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("Info Card");
});
descripcionCard.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("Descripcion");
});
console.log(elementocard,titulocard,inforCard,descripcionCard);

//Delegacion
//Solo se realizar una vez y al padre
elementocard.addEventListener('click',(e)=>{
    if(e.target.classList.contains('card-element-card')){
        console.log("Diste click a un card");
    }
    if(e.target.classList.contains('titlecardclass')){
        console.log("Diste click al titulo");
    }
    if(e.target.classList.contains('descriptionclass')){
        console.log("Diste click descripcion");
    }
});


titlecardclass
inforcardclass
descriptionclass