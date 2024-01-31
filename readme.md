### EVENTOS
Cualquier interaccion que tenga el usuario con nuestra vista, en la mayoria de los casos
Ejemplo: Click,Escribir, Scroll, Pasar el curso sobre un elemento

Pero tambien existen eventos del navegador: cuando carga la pagina, en el cual no existe la interccion con el usuario DOMContentLoaded

1)Estrutura de un evento (Listener)
    Elemento que emitira el evento
    Tipo de Evento a Ejecutar
    Callback o funcion para realizar el trabajo
2)Eventos de Mouse
    Existen disintos tipos de eventos de mouse
    click Se activa cuando doy click en elemento
    mouseup: se activa cuando ingreso al elemento
    dblclickSe activa cuando doy doble click en element
3)Event
    Consideras que cada eventos tiene metodos y propiedades especificas que se guardan en parametro event
    Eventos tipo input Esta relacionado con los eventos de tipo formulario
    Existen 2 tipos una para los inputs del formulario y otro para los submit cuando envias la informacion
4)Blur
     El evento de tipo blur se activa cuando salgo del input

5)Change
    Este evento se activa cuando el valor de un elemento cambia, generalmente después de que el usuario ha realizado alguna acción

6)Input
El evento input se activa cuando el valor de un elemento de entrada (input, textarea, etc.) cambia durante la interacción del usuario. A diferencia del evento change, que se dispara después de que el valor ha cambiado y el usuario ha confirmado la elección (como hacer clic fuera del elemento), el evento input se dispara inmediatamente cuando se modifica el contenido del elemento.
la diferencia entre el change y el input es que el input realizar elemento cuando realizo cualquier accion

7)Evento Submit
Son los eventos que se lanzan o enviar un formulario
Tener en consideracion que todo los eventos tienen una accion por defecto a veces se necesita que no se ejecuten y usamos la metodo e.preventDefault()
8) Evento Scroll
El evento scroll en JavaScript se activa cuando se realiza el desplazamiento (scrolling) en una página web, ya sea vertical u horizontalmente.
9)Event bubbling
Todos los elementos tiene un concepto de burbujeo , vienen desde abajo para arribar
10)Solucion Event bubbling
10.1)Solucion 1 e.stopPropagation()
Este metodo nos permite solucionar el problema, pero no es mas recomendado para ello
10.2)Solucion 2 Delegation
Es la forma mas optima de solucionar esta problema de usando delegation


